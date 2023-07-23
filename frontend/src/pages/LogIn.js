import React, { useState } from 'react';
import axios from "axios"


const LoginForm = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform any necessary login logic here using the userType, username, and password state variables.
    const login = {userName, password}
    const response = await fetch('/api/login', {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        'Content-Type':'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setUsername('')
      setPassword('')
      setError(null)
      console.log('Logged', json)
    }
  };

  return (
    <div className="container justify-content-center align-items-center mt-5 pt-4">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="text-center mt-3 text-danger">Login</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="username"
                  className="form-control my-4 py-2"
                  placeholder="Username"
                  value={userName}
                  onChange={handleUsernameChange}
                />
                <input
                  type="password"
                  id="password"
                  className="form-control my-4 py-2"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="text-center mt-3 mb-2">
                  <button type="submit" className="btn btn-danger">
                    Login
                  </button>
                </div>
                <small className="d-flex justify-content-center">
                  New to Titikman? &nbsp;<a href="signup.html">Sign up</a>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;