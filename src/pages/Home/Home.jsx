
import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { UserContext } from '../../context/UserContext';
import './home.scss'
import { Navigate } from 'react-router-dom';
import Widget from '../../components/Widgets/Widget';
import Chart from '../../components/Chart/Chart';
import Schedule from '../../components/Schedule/Schedule';
import Products from '../../components/Products/Products';
import { FiMenu } from 'react-icons/fi';

const Home = () => {
  const context = useContext(UserContext);
  const[menu, setMenu] = useState(false);
  const[isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {context.user? (
      <div className='home'>

          <div className="sidebar-section">
            {isSmallScreen && (
              <div onClick={() => setMenu(!menu)} className={`side-menu ${menu ? "sidebar-open" : ''}`}>
                <FiMenu color={menu ? "white" : "black"} size={36} />
              </div>
            )}
            {(isSmallScreen && menu) || !isSmallScreen ? <Sidebar /> : null}
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
              <Products/>
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