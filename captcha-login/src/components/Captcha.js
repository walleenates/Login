// Captcha.js
import React, { useState } from 'react';

const Captcha = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);

  const generateCaptcha = () => {
    // Generate random captcha text
    const chars = 'b281e69071debf80886e4c5b8294be25';
    let randomCaptcha = '';
    for (let i = 0; i < 6; i++) {
      randomCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(randomCaptcha);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    if (e.target.value === captchaText) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  return (
    <div>
      <h3>Captcha</h3>
      <button onClick={generateCaptcha}>Generate Captcha</button>
      <div>
        <strong>{captchaText}</strong>
      </div>
      <input
        type="text"
        placeholder="Enter Captcha"
        value={userInput}
        onChange={handleUserInput}
      />
      {captchaValid ? <p style={{ color: 'green' }}>Captcha Valid</p> : <p style={{ color: 'red' }}>Captcha Invalid</p>}
    </div>
  );
};

export default Captcha;
