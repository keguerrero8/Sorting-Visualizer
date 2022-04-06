
const bubbleSort = (array) => {
    console.log(array)
    let isSorted = false
    let end = array.length
    const animations = []
    while (!isSorted) {
        isSorted = true
        end -= 1
        for (let j = 0; j < end; j++) {
            animations.push([j, j+1])
            animations.push([j, j+1])
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                isSorted = false
            }
            animations.push([array[j], array[j+1]])
        } 
    }
    // console.log(array)
    // console.log(animations)
    return {array, animations}
} 

export default bubbleSort;
