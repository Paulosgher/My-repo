
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function detectHateWords(text) {
  let hateWords = ["racist",  "nazi", "fascist", "bigot", "hater",];
  let words = text.toLowerCase().split(/\s+/);
  for (let word of words) {
    if (hateWords.includes(word)) {
      return true;
    }
  }
  return false;
}
function inputText() {
  rl.question("Enter a text: ", (text) => {
    let result = detectHateWords(text);
    if (result) {
      console.log("The text contains hate words.");
    } else {
      console.log("The text does not contain hate words.");
    }
    rl.close();
  });
}
inputText();

