import { AiOutlineRight } from 'react-icons/ai'
import './schedule.css';


const Schedule = () => {
  return (
    <div className='schedule-container'>
        <div className="schedule-header">
            <h3>Today's Schedule</h3>
            <div className="see-all">
                <span>See All</span>
                <AiOutlineRight color='#858585' size="12px"/>
            </div>
        </div>
        <div className="schedule-list">
            <div className="schedule">
                <div className="schedule-bar"></div>
               <div className="schedule-matter">
                    <h5 className="schedule-title">Meeting with suppliers from Kuta Bali</h5>
                    <span className='schedule-time'>14.00-15.00</span>
                    <span className='schedule-place'>at Sunset Road, Kuta, Bali</span>
               </div>
            </div>

            <div className="schedule">
                <div className="schedule-bar second-bar"></div>
               <div className="schedule-matter">
                    <h5 className="schedule-title">Check operation at Giga Factory 1</h5>
                    <span className='schedule-time'>18.00-20.00</span>
                    <span className='schedule-place'>at Central Jakarta</span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule;