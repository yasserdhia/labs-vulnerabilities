"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function Level1Page() {
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState(null);
  const toast = useToast();

  const handleSubmit = async () => {
    if (!userId.trim()) {
      toast({
        title: "User ID required",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3000/level1?id=${userId}`);
      setResult(res.data);
    } catch (err: unknown) {
      if (err && typeof err === "object" && "response" in err) {
        const e = err as { response?: { data?: { error?: string } } };
        toast({
          title: "Error fetching data",
          description: e.response?.data?.error || "Unexpected error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Unknown error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setResult(null);
    }
  };

  return (
    <Box minH="100vh" bg="gray.100" py={10} px={4}>
      <Box
        maxW="lg"
        mx="auto"
        bg="white"
        boxShadow="lg"
        rounded="lg"
        p={8}
        textAlign="center"
      >
        <Heading mb={4} color="teal.600">
          SQL Injection Lab - Level 1
        </Heading>
        <Text mb={6} fontSize="lg" color="gray.600">
          Enter a user ID to retrieve user information.
        </Text>
        <VStack spacing={4}>
          <Input
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            focusBorderColor="teal.500"
          />
          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit
          </Button>
        </VStack>
        {result && (
          <Box mt={6} textAlign="left">
            <Heading size="md" mb={2}>
              Result:
            </Heading>
            <pre
              style={{
                background: "#f7fafc",
                padding: "1rem",
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              {JSON.stringify(result, null, 2)}
            </pre>
          </Box>
        )}
      </Box>
    </Box>
  );
}
