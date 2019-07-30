// take user input
// log it to console
// save to a file
//inout one line at a time
//we get a ding after each line

let time = 0;
let interval = 50;


const sentence = "hello there from lighthouse labs";

for (let letter of sentence) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, time += interval);
}
setTimeout(() => {
  process.stdout.write("\n");
}, time); // Russell explained setTimeouts to us and suggested use a global timeout