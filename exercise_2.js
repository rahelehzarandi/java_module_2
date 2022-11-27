// Write a program that asks the user for the number of participants. After this, the program asks for the names
// of all participants. Finally, the program prints the names of the participants on the web page in an ordered list
// (<ol>) in alphabetical order. (2p)

const nameList=[]
let name
let sort_list

const numParticipants=prompt("Enter number of participants:");

for(let i=1;i<=numParticipants;i++){
    name=prompt("enter name of participants:");
    nameList.push(name);
}

sort_list=nameList.sort();
document.writeln("<ol>")

for (let i=0;i<sort_list.length;i++){
    document.write("<li>" + sort_list[i]+"</li>")
}

document.writeln("<ol>")