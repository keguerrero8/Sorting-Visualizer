import React from 'react'

function Visualizer({array}) {
  const numWidth = Math.floor(document.body.clientWidth / (array.length*1.3))
  const width = `${numWidth}px`
  // console.log(document.getElementById("mainDiv") === null? "its null" : "not null")
  // console.log(document.body.clientWidth)
  // console.log(numWidth)
  return (
    <div>
        {array.map((value, i) => (
            <div key={i}
            className="array-bar" 
                 style={{
                   width: width, 
                   height: `${value*2}px`, 
                   margin: "2px", 
                   display: "inline-block", 
                   backgroundColor: "turquoise", 
                   paddingTop: "20px", 
                   color: "transparent"
                  }}
              >
                {value}
            </div>
        ))}
    </div>
  );
}

export default Visualizer;