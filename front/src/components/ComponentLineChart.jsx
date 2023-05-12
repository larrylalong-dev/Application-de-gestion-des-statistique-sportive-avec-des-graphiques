import React, { useState, useEffect } from "react"
import { getSessions } from './fetch.services.js'
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';


function ComponentLineChart(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const sessions = await getSessions(props.id)
      const chartSessions = transformData(sessions)
      setData(chartSessions)
    }
    loadData();
  }, [props.id]);

  function transformData(sessions) {
    const transformedData = [];
    const days = [
      'L',
      'M',
      'M',
      'J',
      'V',
      'S',
      'D'
    ]
    for (let i = 0; i < sessions.data.sessions.length; i++) {
      transformedData[i] = {
        name: days[sessions.data.sessions[i].day - 1],
        value: sessions.data.sessions[i].sessionLength,
      }
    }
    return transformedData
  }
  console.log(data)

  return (
    <div>
      {data === null ? <p>loading...</p> :
        <div className="componentLineChart-container">
          <p className="componentLineChart-titre">
            Durée moyenne des <br></br> sessions
          </p>
          <ResponsiveContainer className="componentLineChart">
            <LineChart data={data} margin={{ top: 30, bottom: 5 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis label={{ color: 'rgba(255, 255, 255, 0.5)' }} dataKey="name" allowDataOverflow={true} padding={{ left: 20, right: 20 }} axisLine={false} tickLine={false} tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }} />
              <Tooltip itemStyle={{ color: "#000000" }} formatter={(value) => { if (value === 0) {return [" max", value ? value : '0']} return [" min", value ? value : '0']}} separator={''} labelFormatter={value => { return ''; }} />
              <Line dot={false} type="monotone" dataKey="value" stroke="url(#colorUv)" strokeWidth={2} fill="url(#colorUv)"/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      }
    </div>
  );
}

export default ComponentLineChart