import React, { useState } from 'react';
import axios from "axios"


const LoginForm = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost4000/",{
        userType, username, password
      })
    }
    catch(e){
      console.log(e);
    }
  }

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary login logic here using the userType, username, and password state variables.
    console.log('User Type:', userType);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container justify-content-center align-items-center mt-5 pt-4">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="text-center mt-3 text-danger">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label htmlFor="userType" className="form-label">
                    Select User Type:
                  </label>
                </div>
                <select
                  id="userType"
                  className="form-select mb-3"
                  aria-label="Default select example"
                  value={userType}
                  onChange={handleUserTypeChange}
                >
                  <option value="">Open this select menu</option>
                  <option value="1">User</option>
                  <option value="2">Owner</option>
                </select>
                <input
                  type="text"
                  id="username"
                  className="form-control my-4 py-2"
                  placeholder="Username"
                  value={username}
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
                  <button type="submit" className="btn btn-danger" onClick={submit}>
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