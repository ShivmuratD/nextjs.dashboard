'use client'
import React from 'react'
import styles from "../ui/dashboard/styles/login.module.css"
import { authenticate } from '../lib/actions'
// import { useFormState } from 'react-dom'

import { useState } from 'react';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      password
    };
    const result = await authenticate(undefined, formData);
    if (result === 'Wrong Credentials!') {
      setError(result);
    } else {
      router.push("/dashboard")
    
      console.log('Redirecting to dashboard...');
    }
  };

  return (
    <div className={styles.conatiner}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
