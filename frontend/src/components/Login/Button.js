import React from 'react';

import "./login.css"
const Button = () => {

  async function sendRequest(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'cache-control': 'no-cache',
                   'Access-Control-Request-Headers':'*',
                   'Access-Control-Request-Method':'*' },
        body: JSON.stringify({ username: username, password:password }),
        mode:'no-cors'
    };
    let response = await fetch('http://localhost:8080/login', requestOptions);
    let data = await response.text();
    console.log(data);
  }

  return (
    <div>
<<<<<<< HEAD:frontend/src/components/Button.js
        <button type="submit" style={{backgroundColor: "green"}} value="Login" onClick={sendRequest}>
=======
        <button type="submit" style={{backgroundColor: "blue"}} value="Login">
>>>>>>> 44e23be099d16c94f56ab72c5f05cdbf13af0d77:frontend/src/components/Login/Button.js
            Login
        </button>
    </div>
  );
};

export default Button;
