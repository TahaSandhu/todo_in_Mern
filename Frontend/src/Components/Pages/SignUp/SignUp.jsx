import { Link } from "react-router-dom"
import './SignUp.css'
const SignUp = () => {

  return (
    <>
      <div className='container-fluid'>

      </div>

      <div className='container1'>
        <div className="SignUp wrap">
          <div className="h1">Sign Up</div>
          <input
            placeholder="Name"
            id="name"
            name="name"
            type="text"

          />
          <input
            className='input_email'
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            placeholder="Email"
            id="email"
            required
            name="email"
            type="text"
          />
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"

          />
          <input
            placeholder="Confirm Password"
            id="C_password"
            name="C_password"
            type="password"
          />
          <input value="Sign Up" className="btn" type="submit" />
          <Link to='/login'>   <input value="Login" className="btn" type="submit" /></Link>
        </div>
      </div>
    </>
  )
}

export default SignUp