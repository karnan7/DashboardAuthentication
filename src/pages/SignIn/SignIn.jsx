import { useContext, useState, useEffect } from 'react'
import '../SignIn/signin.css'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from "../../context/UserContext"
import { auth } from '../../config/firebase'
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-hot-toast'

const SignIn = () => {

  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
    .then((userCredential) => {
      context.setUser(userCredential.user);
    })
    .catch((error) => {
      toast.error("User not found. Please sign up");
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      context.setUser(userCredential.user);
    })
    .catch((error) => {
      if(!email){
        toast.error("Email is required")
      }else if(!password){
        toast.error('Enter your password')
      }else{
        toast.error("User not found. Enter valid email and password")
      }
    })
  }

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      context.setUser(user);
    })

    return unsubscribe;
  }, [])

  if(context.user?.uid){
    return <Navigate to="/home"/>
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
            <button onClick={handleGoogleSignIn} className='provider-btn'>
              <FcGoogle size="20px"/>
              <span>Sign in with Google</span>
            </button>
            <button className='provider-btn'>
              <FaApple size="20px" color='#999999'/>
              <span>Sign in with Apple</span>
            </button>
          </div>

          <form onSubmit={handleFormSubmit} className='sign-form'>
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