'use client';

import { useState } from 'react';

export default function Level1Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/level1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setResult(data.success ? '✅ Logged in!' : '❌ Login failed.');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🧪 Level 1 - SQL Injection</h1>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="Password" value={password} type="password" onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
      <p>{result}</p>
    </div>
  );
}
