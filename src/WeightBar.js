import React from 'react'

export default function WeightBar( {visibleWeight}) {

  let addedBarShadow = 0


  return ( <div className="WeightBar-Container">

    

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