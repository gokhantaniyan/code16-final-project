import { Link } from "react-router-dom"

function Login(props) {
 return (
  <div className="login">
    <h2>Login</h2>
    <input placeholder="e-mail"/><br />
    <Link to="/register">Create New Account</Link>
  </div>
 )
}

export default Login