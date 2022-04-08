import './App.css';
import Header from './components/Header';
import Visualizer from './components/Visualizer';
import React, {useState} from 'react'

function App() {
  const [array, setArray] = useState([])


  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1 style={{color: "white"}} >Sorting Visualizer</h1>
      <Header array={array} setArray={setArray}/>
      <Visualizer array={array}/>
    </div>
  );
}

export default App;
