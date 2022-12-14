import React, {useState} from 'react'
import Weightplates from './weightplates.js'

export default function Plates( {updateWeight}) {

  const weightValues = ['5', '10', '25', '35', '45']

return ( <div  className="WeightPlate-Container">

{ weightValues.map((weights => { return <Weightplates key={'weight-' + weights} weightVal={weights} updateWeight={updateWeight} /> }))}
    
    </div> )

}