// Write a function called even(), which receives an array containing numbers as a parameter. The function returns a
// second (usually smaller) array which has the even numbers of the original array. The function must not make changes
// to the original table. (3p)
// Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
// Print both the original array and the new array to the console in the main program after you have called the function.
// You can hardcode the array, no need for prompt()


const firstArray=[4,5,8,13,16,11,3,1,19,22,65];
let evenArray=[];


function even(firstArray){
    for (let i=0;i<firstArray.length;i++){
        if (firstArray[i] % 2 ==0 ){
            evenArray.push(firstArray[i]);

        }
    }
    return evenArray;
}


evenNumbers=even(firstArray);
console.log("FirstArray")
for (let i =0;i<firstArray.length;i++){
    console.log(firstArray[i]);
}
console.log("EvenArray")
for (let i =0;i<evenNumbers.length;i++){
    console.log(evenArray[i]);
}

