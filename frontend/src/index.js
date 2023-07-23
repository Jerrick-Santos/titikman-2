import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('');
const db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
  console.log("connection succeeded");
})

App.use(bodyParser.json());
App.use(express.static('public'));
App.use(bodyParser.urlencoded({
  extended: true
}));

App.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

App.post("/sign_up", function(req, res){
  var firstname = req.body.firstname;
  var lastname = req.body.lastName; 
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var confirmpassword = req.body.confirmPassword;
  var birthmonth = req.body.birthMonth;
  var birthday = req.body.birthDay;
  var birthyear = req.body.birthYear;
  var usertype = req.body.userType;

  var data = {
    "firstname": firstname,
    "lastname": lastname,
    "username": username,
    "email": email,
    "password": password,
    "confirmpassword": confirmpassword,
    "birthmonth": birthmonth,
    "birthday":birthday,
    "birthyear": birthyear,
    "usertype": usertype
  };

  db.collection('details').insertOne(data, function(err, collection){
    if (err) {
      console.error(err);
      return res.status(500).json({error: 'Failed to insert data'});
    }

    console.log("Record inserted Successfully");
    return res.status(500).json({message: 'Record inserted Successfully!'});
  });
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

