import React from 'react'
import "../App.css"

function Visualizer({array}) {
  // const numWidth = Math.floor(document.body.clientWidth / (array.length*1.3))
  // const width = `${numWidth}px`
  // console.log(document.getElementById("mainDiv") === null? "its null" : "not null")
  // console.log(document.body.clientWidth)
  // console.log(numWidth)
  return (
    <div style={{width: "100%"}}>
        {array.map((value, i) => (
            <div key={i}
            className="array-bar"
            style={{height: `${value*4}px`}}
              >
                {value}
            </div>
        ))}
    </div>
  );
}

export default Visualizer;