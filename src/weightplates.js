import React, {useState} from 'react'


export default function Weightplates( {weightVal, updateWeight}) {





return <div onClick={() => updateWeight(weightVal)} className="plates"> <h3>{ weightVal }</h3> </div>


}