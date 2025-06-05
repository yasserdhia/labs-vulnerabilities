import axios from 'axios';
import { useState } from 'react';

export default function Level1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/level1/login', { username, password });
      alert(res.data.success ? 'Login success!' : 'Login failed');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div>
      <h1>Level 1 SQL Injection</h1>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" onChange={e => setPassword(e.target.value)} type="password" />
      <button onClick={submit}>Login</button>
    </div>
  );
}
