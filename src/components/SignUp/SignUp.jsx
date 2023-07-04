import { useState } from 'react'
import '../SignIn/signin.css'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <div className='container'>
      <div className="left-section">
        <h1>Board.</h1>
      </div>
      <div className="right-section">
        <div className="card">
          <div className="titles">
            <h2>Sign Up</h2>
            <span>Create a new account</span>
          </div>

          <div className="google">
            <button className='provider-btn'>
              <FcGoogle size="20px"/>
              <span>Sign up with Google</span>
            </button>
            <button className='provider-btn'>
              <FaApple size="20px" color='#999999'/>
              <span>Sign up with Apple</span>
            </button>
          </div>

          <form className='sign-form'>
          <div className="input-grp">
              <label htmlFor="username">Username</label>
              <input 
              id='username'
              type="name"
              name='username'
              placeholder='Enter a Username'
              autoComplete='off' />
            </div>

            <div className="input-grp">
              <label htmlFor="email">Email address</label>
              <input 
              id='email'
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your Email'
              autoComplete='off' />
            </div>

            <div className="input-grp">
              <label htmlFor="password">Password</label>
              <input 
              id='password'
              type="password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your Password'
              autoComplete='off' />
            </div>

            <button style={{marginTop:"20px"}} className='sign-btn'>Sign Up</button>

          </form>
          <p>Already have an account?<Link className='link' to='/'>SignIn</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp