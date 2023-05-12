import React, { useState, useEffect } from "react"
import { getPerformance } from './fetch.services.js'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function ComponentRadarChart(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const performance = await getPerformance(props.id)
      const chartPerformance = transformData(performance)
      setData(chartPerformance)
    }
    loadData();
  }, [props.id]);

  function transformData(performance) {
    const kinds = performance.data.kind;
    const values = performance.data.data;
    const transformedData = [];
    for (let i = 0; i < values.length; i++) {
      transformedData[i] = {
        subject: kinds[values[i].kind],
        value: values[i].value,
      }
    }
    return transformedData
  }

  return (
    <div>
      {data === null ? <p>loading...</p> :
        <div className="componentRadarChart-container">
          <ResponsiveContainer className="componentRadarChart">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid gridType="polygon" radialLines={false} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 12, lineHeight: 50 }} />
              <Radar dataKey="value" fill="rgba(255, 1, 1, 1)" fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      }
    </div>
  );
}

export default ComponentRadarChart