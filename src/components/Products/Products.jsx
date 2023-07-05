import { AiOutlineDown } from 'react-icons/ai';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './product.css';


const data = [
  { name: 'Basic Tees', value: 55, color: '#98D89E' },
  { name: 'Custom Short Pants', value: 31,  color: '#F6DC7D' },
  { name: 'Super Hoodies', value: 14,  color: '#EE8484' },
];

const customizedLegend = (data) => {
    return (
        <ul style={{
            display:'flex',
            flexDirection: 'column',
            gap:'25px',
        }}>
            {data.map((item, index) => (
                <li
                style={{
                    listStyleType:'none',
                    display: 'flex',
                    gap: '10px',
                }}
                key={index}>
                    <div style={{marginTop:5, backgroundColor:item.color, width:"10px", height:"10px", borderRadius:'50%'}}></div>
                    <div>
                        <span style={{fontFamily:"Montserrat, sans-serif", fontWeight:700, fontSize:'14px'}}>{item.name}</span>
                        <p style={{fontSize:'12px'}}>{item.value} %</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

const Products = () => {
  return (
    <div className='schedule-container'>
        <div className="schedule-header">
            <h3>Top Products</h3>
            <div className="see-all">
                <span>May - June 2021</span>
                <AiOutlineDown color='#858585' size="12px"/>
            </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
            <Pie 
            dataKey="value" 
            data={data} 
            startAngle={70}
            endAngle={430}
            cx="50%" 
            cy="50%" 
            stroke="none" 
            outerRadius={70}>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
            <Tooltip />
            <Legend 
            content={() => customizedLegend(data)}
            layout='vertical'
            verticalAlign="middle" 
            align='right'/>
            </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Products