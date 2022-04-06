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
  
  const handleNewArray = () => {
    const newArray = []
    for (let i = 0; i < 10; i++) {
        newArray.push(randomInterval(0, 100))
    }
    setArray(newArray)
  } 

  const handleBubbleSort = () => {
    const { sortedArray, animations } = bubbleSort(array)
    console.log(animations)
    const arrayBars = document.getElementsByClassName("array-bar")
    for (let i = 0; i < animations.length; i++) {
      //change color when using index 0 and 1
      const isColorChange = i % 3 != 2
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i]
        //when i is 0, 3 turn red, when i is 1, 4 turn turqoiuse, so second animation
        const color = i % 3 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color
          arrayBars[barTwoIdx].style.backgroundColor = color
        }, i*100)
      } else {
        setTimeout(() => {
          const [barOneHeight, barTwoHeight] = animations[i];
          const [barOneIdx, barTwoIdx] = animations[i-1]
          arrayBars[barOneIdx].style.height = `${barOneHeight*2}px`;
          arrayBars[barTwoIdx].style.height = `${barTwoHeight*2}px`;
        }, i * 100);
      }

    }
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

