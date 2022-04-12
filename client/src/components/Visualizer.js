import React from 'react'
import "../App.css"

function Visualizer({array}) {

  return (
    <div style={{width: "100%"}}>
        {array.map((value, i) => (
            <div key={i}
            className="array-bar"
            style={{height: `${value*4}px`, width: `${array.length > 50 ? "0.5%" : "0.9%"}`}}
              >
                {value}
            </div>
        ))}
    </div>
  );
}

export default Visualizer;