import React, { useState, useEffect } from "react"
import { getInitial } from './fetch.services.js'
import Nav from './Nav.jsx'
import ComponentBarChart from './ComponentBarChart.jsx'
import ComponentRadarChart from './ComponentRadarChart.jsx'
import ComponentRadarRadial from './ComponentRadarRadial.jsx'
import ComponentLineChart from './ComponentLineChart.jsx'
import ComponentData from './ComponentData.jsx'
import { useParams } from "react-router-dom";

function Main() {

    const { id } = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            const initial = await getInitial(id);
            setData(initial)
        }
        loadData();
    }, [id]);

    return (
        <div>
            {data === null ? <p>loading...</p> :
                <div className="Main">
                    <Nav></Nav>
                    <h1 className="Main-titre">
                        Bonjour <span>{data.data.userInfos.firstName}</span>
                    </h1>
                    <p className="Main-soustitre">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <div className="Main-grid">
                        <ComponentBarChart id={id}></ComponentBarChart>
                        <ComponentLineChart id={id}></ComponentLineChart>
                        <ComponentRadarChart id={id}></ComponentRadarChart>
                        <ComponentRadarRadial id={id}></ComponentRadarRadial>
                        <ComponentData id={id}></ComponentData>
                    </div>
                </div>
            }
        </div>
    );
}

export default Main;