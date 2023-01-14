// Write a JavaScript function that takes in two parameters, an array and a number (n)
// and return the first n elements of that array.

// Write a function with two parameters
function getElements(array, num) {
    // check to see if a valid array and number is entered
    if (array === null || num === null){
      return 'Not a valid input, please try again'
    }
     // check if the number is greater than 0
     else if (num < 0) {
      return "Please enter a number greater than 0"
    }
    // check to see if the number is lesser than the amount of items in the array
    else if (num > array.length) {
      return `There are only ${array.length} item, please enter a new number`
    }
    // if everything is correct slice the array starting from the index of 0
    return array.slice(0, num)
  }
    const fruits = ['apple', 'orange', 'bannana', 'kiwi']
    getElements(fruits, 2)