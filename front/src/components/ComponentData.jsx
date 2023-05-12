import React, { useState, useEffect } from "react"
import { getInitial } from './fetch.services.js'
import icon1 from '../img/calories-icon.svg'
import icon2 from '../img/protein-icon.svg'
import icon3 from '../img/carbs-icon.svg'
import icon4 from '../img/fat-icon.svg'


function ComponentData(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const initial = await getInitial(props.id);
      setData(initial)
    }
    loadData();
  }, [props.id]);

  return (
    <div>
      {data === null ? <p>loading...</p> :
        <div className="ComponentData">
          <div className="bloc">
            <img src={icon1} alt="" />
            <div className="text">
              <p className="number">{data.data.keyData.calorieCount}kCal</p>
              <p className="type">Calories</p>
            </div>
          </div>
          <div className="bloc">
            <img src={icon2} alt="" />
            <div className="text">
              <p className="number">{data.data.keyData.proteinCount}g</p>
              <p className="type">Protéines</p>
            </div>
          </div>
          <div className="bloc">
            <img src={icon3} alt="" />
            <div className="text">
              <p className="number">{data.data.keyData.carbohydrateCount}g</p>
              <p className="type">Glucides</p>
            </div>
          </div>
          <div className="bloc">
            <img src={icon4} alt="" />
            <div className="text">
              <p className="number">{data.data.keyData.lipidCount}g</p>
              <p className="type">Lipides</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ComponentData