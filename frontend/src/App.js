import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div>
      <h1>Decentralized Voting Platform</h1>
      <h2>Register</h2>
      <RegisterForm />
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default App;
