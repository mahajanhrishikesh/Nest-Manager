import PropTypes from 'prop-types';
import "../App.css"
import Button from './Button';
const Login = () => {
  function sendRequest() {
    console.log("Hey");
  }

  return (
  <div className='container'>
    <h4>Login Here</h4>
    <div className="loginForm">
      <label for="uname">Username</label>
      <input type="text" id="username" name="uname" placeholder="Username" required/>
      <label for="pswd">Password</label>
      <input type="password" id="password" name="pswd" placeholder="Password" required/>
      <Button/>
    </div>
    <span>Not a Tenant?<a href="#">Apply Here</a></span>
  </div>);
};


export default Login;
