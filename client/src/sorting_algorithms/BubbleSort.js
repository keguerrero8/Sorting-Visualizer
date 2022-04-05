
// const bubbleSort = (array) => {
//     for (let i = 0; i <= array.length; i++) {
//         for (let j = 0; j < array.length - 1; j++) {
//             if (array[j] > array[j+1]) {
//                 let temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = temp
//             }
//         }
//     }
//     return array
// } 

const bubbleSort = (array) => {
    let isSorted = false
    let end = array.length
    while (!isSorted) {
        isSorted = true
        end -= 1
        for (let j = 0; j < end; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                isSorted = false
            }
        } 
    }
    return array
} 

export default bubbleSort;
