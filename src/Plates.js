import React, {useState} from 'react'
import Weightplates from './weightplates.js'

export default function Plates(props) {

  const weightValues = ['5', '10', '25', '35', '45']

return ( <div currentWeightValue="we" class="WeightPlate-Container">

{ weightValues.map((weights => { return <Weightplates changeWeight={props.updateWeight(weights)} /> }))
    
    </div> )

}