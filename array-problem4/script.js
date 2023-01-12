// Write a JavaScript function to remove duplicate items from an array 
// (consider case sensitivity).

function removeDuplicates(array) {
    // make a variable with an empty array to push the items into it
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        // if the items from the array doesnt exist in the newArray
      if (!newArray.includes(array[i])) {
        // push it into the new array
        newArray.push(array[i])
      }
    }
    return newArray
  }
  
  const num = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
  removeDuplicates(num)

