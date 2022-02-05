import React from 'react';

import "../App.css"
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
        <button type="submit" style={{backgroundColor: "green"}} value="Login" onClick={sendRequest}>
            Login
        </button>
    </div>
  );
};

export default Button;
