import React, { useState, useEffect } from "react"
import { getInitial } from './fetch.services.js'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

function ComponentRadarRadial(props) {

  const [data, setData] = useState(null);

  const transformedData = [{
    name: '',
    value: data,
  }
  ]

  useEffect(() => {
    async function loadData() {
      const initial = await getInitial(props.id);
      let score = initial.data.todayScore * 100 || initial.data.score * 100;
      setData(score)
    }
    loadData();
  }, [props.id]);

  return (
    <div>
      {data === null ? <p>loading...</p> :
        <div className="componentRadarRadial-container">
          <div className="text">
            <p>
            <span>{data}</span><br></br>de votre<br></br> objectif
            </p>
            </div>
          <ResponsiveContainer className="componentRadarRadial">
            <PieChart>
              <Pie startAngle={90} endAngle={data * 3.6 + 90} data={transformedData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={100} fill="#FF0000" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      }
    </div>
  );
}

export default ComponentRadarRadial