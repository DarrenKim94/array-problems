// Define a function that takes in an array of elements and joins
// them together into a string separated by a comma with a space after the comma.

// define a function and a parameter
function joinArray(arr) {
    // use join instead of toString, join lets you use any seperater 
    return (arr.join(' ,'));
}
//  make an array and call it in the function 
const fruits = ['kiwi', 'apple', 'orange','melon']
joinArray(fruits)