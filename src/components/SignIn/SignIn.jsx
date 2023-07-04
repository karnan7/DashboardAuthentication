import { useContext, useState } from 'react'
import '../SignIn/signin.css'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { auth } from '../../config/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const SignIn = () => {

  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
    .then((userCredential) => {
      context.setUser(userCredential.user);
      console.log(userCredential)
    })
  }

  return (
    <div className='container'>
      <div className="left-section">
        <h1>Board.</h1>
      </div>
      <div className="right-section">
        <div className="card">
          <div className="titles">
            <h2>Sign In</h2>
            <span>Sign in to your account</span>
          </div>

          <div className="google">
            <button className='provider-btn'>
              <FcGoogle size="20px"/>
              <span>Sign in with Google</span>
            </button>
            <button className='provider-btn'>
              <FaApple size="20px" color='#999999'/>
              <span>Sign in with Apple</span>
            </button>
          </div>

          <form className='sign-form'>
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

            <span className='forgot'>Forgot password?</span>
            <button className='sign-btn'>Sign In</button>

          </form>
          <p>Don't have an account?<Link className='link' to="/signup">Register here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn