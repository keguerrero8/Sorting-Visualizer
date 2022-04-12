import './App.css';
import Header from './components/Header';
import Visualizer from './components/Visualizer';
import React, {useState, useEffect} from 'react'

function App() {
  const [array, setArray] = useState([])

  const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    const newArray = []
    for (let i = 0; i < 50; i++) {
        newArray.push(randomInterval(0, 100))
    }
    setArray(newArray)
  }, [])

  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1 style={{color: "white"}} >Sorting Visualizer</h1>
      <Header array={array} setArray={setArray}/>
      <Visualizer array={array}/>
    </div>
  );
}

export default App;
