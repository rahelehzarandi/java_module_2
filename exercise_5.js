// Write a program that prompts the user for numbers. When the user enters one of the numbers he previously
// entered, the program will announce that the number has already been given and stops its operation and then prints
// all the given numbers to the console in ascending order

let numberList=[];
let sortlist_5;
let number =prompt("enter number, for being finish program enter repeated number");

while (!numberList.includes(number)){
    numberList.push(number);
    number =prompt("enter number, for being finish program enter repeated number");

}

sortlist_5=numberList.sort(function (x,y){return x-y})

for (let i = 0; i < sortlist_5.length; i++) {
    console.log(sortlist_5[i]);
}



