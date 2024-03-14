/*Day 4 Challenge: Start Coding!

Question 10: Adding Comments: Choose two of the programs you've written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

Fawwad 2024-04-16
this program print a personal message */ 
let myName :string="FAWWAD";
console.log(`Hello ${myName} would you like to complete your todays assignment?`);

// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person's name by accessing each element in the list, one at a time.
let friendList:string[]=["SHABAN","EBAD","HUZAIFA"];
for(let i=0;i<friendList.length;i++){
    console.log(friendList[i]);
}
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person's name, print a message to them. The message should be the same for each person, but personalized with their name.
let friendList1:string[]=["SHABAN","EBAD","HUZAIFA"];
const msg:string=", would you complete your todays assignment?"
for(let i=0;i<friendList1.length;i++){
    console.log("Hello " +friendList1[i] +msg);
}d