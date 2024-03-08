import './Login.css'
import { Link } from "react-router-dom"

const Login = () => {

  return (
  <>
<div className='container-fluid'>
</div>

<div className='container1'>
<div className="login wrap">
      <div className="h1">Login</div>

      <input
      className='input_email'
        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
        placeholder="Email"
        id="email"
        name="email"
        type="text"
      />
      <input
        placeholder="Password"
        id="password"
        name="password"
        type="password"
      />
      <input value="Login" className="btn" type="submit" />
    <Link to='/signup'><input  value="Signup" className="btn" type="submit" /></Link>

    </div>
</div>
  </>
  )
}

export default Login