// Write a function called concat(), which receives an array of strings as a parameter. The function returns a string formed by concatenating the elements of the array. (2p)
//
// Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string
// JohnnyDeeDeeJoeyMarky.
// Do not use array.join() function
// You can hardcode the array, no need for prompt().
// Print the result to HTML document.

let array1=["Hi"]
let array2=["My"]
let array3=["Name"]
let array4=["IsRaheleh"]
let concat_arrays=[]
let sentence

function concat(array1,array2,array3,array4){
    concat_arrays=array1+array2+array3+array4
    return concat_arrays
}
sentence=concat(array1,array2,array3,array4);

document.write(sentence)
