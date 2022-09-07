import React, {useState} from "react";
import "./style.css";
import WeightCounter from './weightCounter.js'
import WeightBar from './WeightBar.js'
import Plates from './Plates.js'

export default function App() {

  const [currentWeight, SetWeight] = useState(0)

  let dragValue = currentWeight

  



  return (

    <div className="main">
      <h1>Workout</h1>
      <p>Create Your Workout</p>

      <div className="inner-container">
      <WeightCounter weight={currentWeight}/>
      <WeightBar dragUpdate={dragValue => SetWeight(currentWeight + dragValue)} dragWeight={dragValue}  visibleWeight={currentWeight} />
      <Plates updateWeight={ weightValue => SetWeight(currentWeight + weightValue * 2)} />
      </div>

    
    </div>
  );
}
