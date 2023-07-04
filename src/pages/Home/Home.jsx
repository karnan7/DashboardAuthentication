
import { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { UserContext } from '../../context/UserContext';
import './home.scss'
import { Navigate } from 'react-router-dom';
const Home = () => {
  const context = useContext(UserContext)
  return (
    <>
    {context.user? (
      <div className='home'>
        <div className="sidebar-section">
          <Sidebar />
        </div>
  
        <div className="home-section">
            <Navbar/>
            homepage
        </div>
      </div>
    ) : (
      <Navigate to="/"/>
    )}
    </>
  )
}

export default Home;