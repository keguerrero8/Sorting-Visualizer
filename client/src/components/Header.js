import React, {useState} from 'react'
import { Button, Slider, Box } from '@mui/material';
import Visualizer from './Visualizer';
import bubbleSort from '../sorting_algorithms/BubbleSort';

function Header() {
  const [array, setArray] = useState([])
  // console.log(array)
  const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const handleNewArray = (event) => {
    const newArray = []
    for (let i = 0; i < 30; i++) {
        newArray.push(randomInterval(0, 100))
    }
    setArray(newArray)
  } 

  const handleBubbleSort = (event) => {
    const algoArray = bubbleSort(array)
  } 

  const testSort = () => {
    for (let i = 0; i < 1000; i++) {
      const testArray = []
      for (let i = 0; i < 30; i++) {
        testArray.push(randomInterval(0, 100))
      }
      const algoArray = bubbleSort(testArray)
      const jsArray = [...testArray].sort((a,b) => a - b)

      let isEqual = true
      for (let i = 0; i < algoArray.length; i++) {
        if (algoArray[i] !== jsArray[i]) {
          isEqual = false
        }
      }
      console.log(isEqual)
    }
  }

  return (
      <Box sx={{width: "95%", margin: "auto"}} id="mainDiv">
            <Button sx={{margin: "10px auto"}} onClick={handleNewArray}> Generate New Array</Button>
            <Box sx={{width: "30%", margin: "auto"}} >
                <Slider defaultValue={50} valueLabelDisplay="auto" />
            </Box>
            <Box sx={{width: "70%", margin: "40px auto", display: "flex", justifyContent: "space-between"}}>
                <Button onClick={handleBubbleSort}>Bubble Sort</Button>
                <Button >Merge Sort</Button>
                <Button >Quick Sort</Button>
                <Button >Heap Sort</Button>
            </Box>
            {/* <Button onClick={testSort}>Test Sort</Button> */}
            <Visualizer array={array}/>
      </Box>
  );
}

export default Header;

