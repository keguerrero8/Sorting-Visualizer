import React, {useState} from 'react'
import { Button, Slider, Box, Typography } from '@mui/material';
import {bubbleSort, bubbleSortAnimations} from '../sorting_algorithms/BubbleSort';
import { mergeSort, mergeSortAnimations } from '../sorting_algorithms/MergeSort';

function Header({array, setArray}) {
  const [isDisabled, setisDisabled] = useState(false)
  const [arraySize, setArraySize] = useState(20)
  const [speed, setSpeed] = useState(50)

  const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const handleNewArray = () => {
    const newArray = []
    for (let i = 0; i < arraySize; i++) {
        newArray.push(randomInterval(0, 100))
    }
    setArray(newArray)
  } 

  const handleBubbleSort = () => {
    setisDisabled(true)
    const { animations } = bubbleSort(array)
    bubbleSortAnimations(animations, speed, setisDisabled)
  } 

  const handleMergeSort = () => {
    setisDisabled(true)
    const { animations } = mergeSort(array)
    mergeSortAnimations(animations, speed, setisDisabled)
  } 

  // const testSort = () => {
  //   for (let i = 0; i < 1000; i++) {
  //     const testArray = []
  //     for (let i = 0; i < 30; i++) {
  //       testArray.push(randomInterval(0, 100))
  //     }
  //     const {array} = mergeSort(testArray)
  //     const jsArray = [...testArray].sort((a,b) => a - b)

  //     let isEqual = true
  //     for (let i = 0; i < array.length; i++) {
  //       if (array[i] !== jsArray[i]) {
  //         isEqual = false
  //       }
  //     }
  //     console.log(isEqual)
  //   }
  // }

  function handleSizeSlider (event) {
    setArraySize(event.target.value)
  }

  function handleSpeedSlider (event) {
    setSpeed(event.target.value)
  }

  return (
      <Box sx={{width: "95%", margin: "auto"}} id="mainDiv">
            <Box sx={{width: "100%", margin: "auto", display: "flex"}}>
              <Box sx={{width: "30%", margin: "auto"}} >
                  <Typography color="white">Speed</Typography>
                  <Slider value={speed} valueLabelDisplay="auto" disabled={isDisabled} onChange={handleSpeedSlider}/>
              </Box>
              <Box sx={{width: "30%", margin: "auto"}} >
                  <Typography color="white">Array Size</Typography>
                  <Slider value={arraySize} valueLabelDisplay="auto" disabled={isDisabled} onChange={handleSizeSlider}/>
              </Box>
            </Box>
            <Button sx={{margin: "10px auto"}} onClick={handleNewArray}> Generate New Array</Button>
            <Box sx={{width: "70%", margin: "40px auto", display: "flex", justifyContent: "space-between"}}>
                <Button onClick={handleBubbleSort}>Bubble Sort</Button>
                <Button onClick={handleMergeSort}>Merge Sort</Button>
                <Button >Quick Sort</Button>
                <Button >Heap Sort</Button>
            </Box>
            {/* <Button onClick={testSort}>Test Sort</Button> */}
      </Box>
  );
}

export default Header;

