// Define a function that takes in an array of numbers/integers and returns the sorted 
// version of that array , greatest to least. (Note: do NOT use the "reverse" method.)


function sortArray(arr) {
    // write another function that compares two numbers
   return arr.sort(function(a, b) {
    // if one number is greater than the other return 1 and put that number after the other
    if (a > b) {
        return 1
    }
    // if one number is less than the other return -1 and put it before the other
    else if (a < b) {
        return -1
    }
    // if it is the same, dont change the order of the numbers
    else {
        return 0
    }
   });
}

const num = [10, 24, 5, 0, -3, 3, -20,]
sortArray(num)