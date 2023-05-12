import React, { useState, useEffect } from "react"
import { getActivity } from './fetch.services.js'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';


function ComponentBarChart(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const activity = await getActivity(props.id)
      setData(activity.data.sessions)
    }
    loadData();
  }, [props.id]);

  return (
    <div>
      {data === null ? <p>loading...</p> :
        <div className="componentBarChart-container">
          <p className="componentBarChart-titre">
            Activité quotidienne
          </p>
          <ResponsiveContainer className="componentBarChart">
            <BarChart width={730} height={250} data={data} margin={{ top: 25, bottom: 10, left: 0, right: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis />
              <YAxis orientation="right" />
              <Tooltip wrapperStyle={{ border: 'none' }} contentStyle={{ backgroundColor: '#E60000' }} itemStyle={{ color: "#FFFFFF" }} formatter={(value, name) => [value, ""]} separator={''} labelFormatter={value => { return ''; }} />
              <Legend verticalAlign="top" align="right" height={60}  formatter={(value) => <span className="text-color-class">{value}</span>}/>
              <Bar barSize={7} borderRadius={10} legendType="circle" dataKey="kilogram" fill="#282D30" name="Poids (kg)" unit="kg"/>
              <Bar barSize={7} legendType="circle" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" unit="kCal"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      }
    </div>
  );
}

export default ComponentBarChart