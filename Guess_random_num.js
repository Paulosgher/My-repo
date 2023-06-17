const r1 = require('prompt-sync');


const y = Math.floor(Math.random() * 10) + 1;
const prompt = r1();

const machine = (y) => {
  const guess = prompt("guess anumber between 1-10: ");
  if(y==guess){
    console.log("correctyou got it bu it is note Lottory bro!!!");
  }
  else{
    console.log("error try another number")
    machine(y);
  }
}
machine(y);