// Write a program that asks for the names of six dogs. The program prints dog names to
// unordered list <ul> in reverse alphabetical order.

const nameDog=[];
let name;
let reverse_list;

for (let i=0;i<6;i++){
    name=prompt("Enter name of Dogs");
    nameDog.push(name);
}
reverse_list=nameDog.sort().reverse()

document.write("<ul>")
for (let i=0;i<reverse_list.length;i++){
    document.write("<li>" +reverse_list[i]+ "</li>")
}
document.write("<ul>")