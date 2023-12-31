import { useContext, useEffect, useState } from 'react'
import '../SignIn/signin.css'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { auth } from '../../config/firebase'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-hot-toast'

const SignUp = () => {

  const context = useContext(UserContext);
  const[userName, setUserName] = useState("");
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

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      context.setUser(userCredentials.user);
      toast.success("Successfully registered")
    })
    .catch((error) => {
      if(!userName){
        toast.error("Enter a username")
      }else if(!email){
        toast.error("Enter an email")
      }else if(!password){
        toast.error('Enter a password. Password must greater than 4 digits')
      }else{
        toast.error(error.message)
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
    return <Navigate to="/"/>
  }
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
            <button onClick={handleGoogleSignIn} className='provider-btn'>
              <FcGoogle size="20px"/>
              <span>Sign up with Google</span>
            </button>
            <button className='provider-btn'>
              <FaApple size="20px" color='#999999'/>
              <span>Sign up with Apple</span>
            </button>
          </div>

          <form onSubmit={handleSignUp} className='sign-form'>
          <div className="input-grp">
              <label htmlFor="username">Username</label>
              <input 
              id='username'
              type="name"
              name='username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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