import "../Login/login.css"
import Button from '../Login/Button';
const Login = () => {
  return (
  <div className='container123'>
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
