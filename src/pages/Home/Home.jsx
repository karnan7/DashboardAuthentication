
import { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { UserContext } from '../../context/UserContext';
import './home.scss'
import { Navigate } from 'react-router-dom';
import Widget from '../../components/Widgets/Widget';
import Chart from '../../components/Chart/Chart';
import Schedule from '../../components/Schedule/Schedule';
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
            <div className="widget-section">
              <Widget type="revenue"/>
              <Widget type="transactions"/>
              <Widget type="likes"/>
              <Widget type="users"/>
            </div>
            <div className="chart-section">
              <Chart/>
            </div>
            <div className="bottom-section">
              <Schedule/>
              <Schedule/>
            </div>
        </div>
      </div>
    ) : (
      <Navigate to="/"/>
    )}
    </>
  )
}

export default Home;