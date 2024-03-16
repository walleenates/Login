
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    
import { useNavigate } from 'react-router-dom';
import Captcha from './Captcha';
import SignUp from './SignUp';

const firebaseConfig = {
    apiKey: "AIzaSyCBdzrqKiHgPfGHE7URz7sjUu5IgkaYPs0",
    authDomain: "logincaptcha-d78da.firebaseapp.com",
    projectId: "logincaptcha-d78da",
    storageBucket: "logincaptcha-d78da.appspot.com",
    messagingSenderId: "1053061150436",
    appId: "1:1053061150436:web:5b0d00f5f6b4e52fb31ef1",
    measurementId: "G-DK0J8GR88L"
  };
const app = initializeApp(firebaseConfig);


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login successful:', user);
        navigate('/dashboard');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Captcha />
      <button onClick={handleLogin}>Login</button>
      <SignUp />
    </div>
  );
};

export default Login;
