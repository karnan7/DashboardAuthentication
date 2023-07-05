import './chart.css';
import { FiChevronDown } from 'react-icons/fi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Axios from "axios";
import { useEffect, useState } from 'react';

// const data = [
//     {
//         name:'',
//         users:100,
//         guests:200,
//     },
//   {
//     name:'week 1',
//     users:400,
//     guests:380,
//   },
//   {
//     name:'week 2',
//     users:150,
//     guests:200,
//   },
//   {
//     name:'week 3',
//     users:450,
//     guests:300,
//   },
//   {
//     name:'week 4',
//     users:180,
//     guests:220,
//   },
//   {
//     name:'',
//     users:250,
//     guests:450,
//   },
// ];
const Chart = () => {

  const[details, setDetails] = useState({});

  const fetchDetails = async () => {
    const {data} = await Axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
    const limitedData = data.slice(0, 6)
    setDetails(limitedData.map(item => ({
      name: ["","week1","week2", "week3", "week4", "week5"],
      guests: Math.min(parseInt(item.gameID), 500),
      users: Math.min(parseInt(item.steamAppID), 300) 
    })));
  }

  useEffect(() => {
    fetchDetails();
  },[])
  return (
    <div className='chart-container'>
        <div className="chart-header">
            <div className="chart-title">
                <h2>Activities</h2>
                <span>May - June 2021 <FiChevronDown/></span>
            </div>
            <div className="chart-labels">
                <div className="label-grp">
                    <div className="guest-label"></div>
                    <span>Guest</span>
                </div>
                <div className="label-grp">
                    <div className="user-label"></div>
                    <span>User</span>
                </div>
            </div>
        </div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart
            width={400}
            height={300}
            data={details}
            margin={{
                top: 15,
                right: 30,
                left: -20,
            }}
            >
            <CartesianGrid vertical={false}/>
            <XAxis stroke="EAEAEA" dataKey="name"/>
            <YAxis strokeWidth={0} domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} tickCount={5}/>
            <Line type="monotone" dataKey="users" strokeWidth={3} stroke="#9BDD7C" dot={false}/>
            <Line type="monotone" dataKey="guests" strokeWidth={3} stroke="#E9A0A0" dot={false} />
            </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart