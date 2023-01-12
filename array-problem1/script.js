// Write a JavaScript function that takes in two parameters, an array and a number (n)
// and return the first n elements of that array.

// Write a function with two parameters
function getElements(array, n) {
    // check to see if a valid array and number is entered
    if (array === null || n === null){
      return 'Not a valid input, please try again'
    }
     // check if the number is greater than 0
     else if (n < 0) {
      return "Please enter a number greater than 0"
    }
    // check to see if the number is lesser than the amount of items in the array
    else if (n > array.length) {
      return `There are only ${arr.length} item, please enter a new number`
    }
    // if everything is correct slice the array starting from the index of 0
    return array.slice(0, n)
  }
    const fruits = ['apple', 'orange', 'bannana', 'kiwi']
    getElements(fruits, 2)