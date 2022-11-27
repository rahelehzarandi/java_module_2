// Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified
// function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice
// rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the
// user at the beginning.

let randNum_list=[];
let randNum=0;
let rollSide

function randomFunction (rollSide){
    return Math.floor(Math.random()*rollSide)+1;
}

rollSide=prompt("Enter number of sides")
while (randNum != rollSide){
    randNum=randomFunction(rollSide);
    randNum_list.push(randNum);
}

document.write("<ul>");
for (let i =0;i<randNum_list.length;i++){
    document.write("<li>" + randNum_list[i]+ "</li>");
}
document.write("<ul>");