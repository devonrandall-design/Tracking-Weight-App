import React from 'react'

export default function WeightBar( {visibleWeight, dragValue, dragUpdate}) {

  let draggable = true

  function handleDragEnter(e) {
    e.target.classList.add('drag-entering')

  }

  function handleDragLeave(e) {
    e.target.classList.remove('drag-entering')

  }

  function handleDragOver(e) {
  e.preventDefault()
  }

  function handleDrop(e) {
    e.preventDefault()
    if (e.target.dataset.drop === 'true') {
    dragUpdate(45 * 2)
    }
  }




  return ( <div onDragOver={handleDragOver}  data-drop="true"  onDrop={handleDrop} onDragLeave={handleDragLeave} onDragEnter={handleDragEnter} className="WeightBar-Container dropZone">

    

    <div className={visibleWeight === 0 ? 'bar' : 'bar-shadow'}>
      <div className="barstop"></div>
      {visibleWeight === 10 &&
      <>
      <div className="visiblePlate five left"></div>
      <div className="visiblePlate five right"></div>
      </>
       }
       {visibleWeight === 90 &&
      <>
      <div className="visiblePlate fourtyfive left"></div>
      <div className="visiblePlate fourtyfive right"></div>
      </>
       }
       <div className="barstop"></div>
    </div>
    
    </div> )

}