import restaurant from '../assets/restaurant.png';
import React, { useState } from 'react';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [userType, setUserType] = useState('');

  const register = () => {
    Axios.post('http://localhost3001/register', {
      firstname: firstName,
      lastname: lastName, 
      username: username,
      email: email,
      password: password,
      confirmpassword: confirmPassword,
      birthmonth: birthMonth,
      birthday: birthDay,
      birthyear: birthYear,
      usertype: userType
    }).then((response)=>{
        console.log(response)
    });
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleBirthMonthChange = (e) => {
    setBirthMonth(e.target.value);
  };

  const handleBirthDayChange = (e) => {
    setBirthDay(e.target.value);
  };

  const handleBirthYearChange = (e) => {
    setBirthYear(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Birth Month:', birthMonth);
    console.log('Birth Day:', birthDay);
    console.log('Birth Year:', birthYear);
    console.log('User Type:', userType);
  };

  return (
    <div className="container align-items-center mt-1 pt-5">
      <div className="row border rounded-5 p-4 bg-white shadow box-area">
        <div className="col-md-6 left-box">
          <div className="row align-items-center">
            <div className="header-text mb-3 text-danger">
              <h1>Sign Up</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <p className="birthday">Birthday</p>
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Month"
                    value={birthMonth}
                    onChange={handleBirthMonthChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Day"
                    value={birthDay}
                    onChange={handleBirthDayChange}
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Year" // Adding the year input
                    value={birthYear}
                    onChange={handleBirthYearChange}
                  />
                </div>
              </div>
              <div className="mb-1">
                <label className="form-label">Select User Type:</label>
              </div>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                value={userType}
                onChange={handleUserTypeChange}
              >
                <option value="">Open this select menu</option>
                <option value="1">User</option>
                <option value="2">Owner</option>
              </select>
              <p className="continue justify-content-center">
                By continuing, you agree to Titikman's Terms of Service and acknowledge Titikman's Privacy Policy
              </p>
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg btn-danger w-100 fs-6" onClick={register}>
                  Sign Up
                </button>
              </div>
              <div className="row">
                <small className="info d-flex justify-content-center">
                  Already have an account? &nbsp;<a href="index.html">Log In</a>
                </small>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-box" style={{ background: '#ffffff' }}>
          <div className="featured-image mb-3">
            <img src={restaurant} className="img-fluid mb-7" style={{ width: '400px' }} alt="Restaurant" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
