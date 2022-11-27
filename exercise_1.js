// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
//     Print the result to the console.(2p)
//
//     Save the numbers to an array, then use for-loop to iterate in reverse order.
//     Do not use array.reverse() function.




var numList=[]
var reverseList=[]

// const num1=prompt("enter 5 number");
// numList.push(num1)
// const  num2=prompt("enter 4 number");
// numList.push(num2)
// const  num3=prompt("enter 3 number");
// numList.push(num3)
// const  num4=prompt("enter 2 number");
// numList.push(num4)
// const  num5=prompt("enter 1 number");
// numList.push(num5)


for (let i=0;i<5;i++){
    let num=prompt("Enter 5 number");
    numList.push(num);

}
for (let i=numList.length;i>=0;i--){
    reverseList.push(numList[i])
}
for (let i =0;i<reverseList.length;i++){
    console.log(reverseList[i])
}