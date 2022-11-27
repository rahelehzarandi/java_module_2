// Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters.
//     Write a main program that rolls the dice until the result is 6. The main program should print out the result of
// each roll in an unordered list (<ul>).

let randNum_list=[];
let randNum=0;
function randomFunction (){
    return Math.floor(Math.random()*6)+1;
}

while (randNum != 6){
    randNum=randomFunction();
    randNum_list.push(randNum);
}

document.write("<ul>");
for (let i =0;i<randNum_list.length;i++){
    document.write("<li>" + randNum_list[i]+ "</li>");
}
document.write("<ul>");