// Write a JavaScript function that takes in two parameters, an array and a number (n)
// and return the first n elements of that array.

// Write a function with two parameters
function getElements(array, n) {
    // slice the array starting from the index 0 to n, 
    // the number that is passed in th argument
    return(array.slice(0, n))
  }
    const fruits = ['apple', 'orange', 'bannana', 'kiwi']
    getElements(fruits, 2)