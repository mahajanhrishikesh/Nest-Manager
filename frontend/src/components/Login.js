import PropTypes from 'prop-types';
import "../App.css"
import Button from './Button';
const Login = () => {
  return (
  <div className='container'>
    <h4>Login Here</h4>
    <div className="loginForm">
      <label for="uname">Username</label>
      <input type="text" name="uname" placeholder="Username" required/>
      <label for="pswd">Password</label>
      <input type="password" name="pswd" placeholder="Password" required/>
      <Button/>
    </div>
  </div>);
};


export default Login;
