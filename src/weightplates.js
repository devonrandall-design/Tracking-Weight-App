import React, {useState} from 'react'


export default function Weightplates( {weightVal, updateWeight}) {

function handleDrag(e) {
  e.target.classList.add('being-dragged')

}

function handleDragEnd(e) {
  e.target.classList.remove('being-dragged')
  
}




return <div draggable="true" onTouchMove={handleDrag} onTouchEnd={handleDragEnd} onDrag={handleDrag} onDragEnd={handleDragEnd} onClick={() => updateWeight(weightVal)} className="plates"> <h3>{ weightVal }</h3> </div>


}