// Question 1 //
console.log("\n Question 1 returns")
const loop0UpTo10 = (num) => {
  for (let i = 0 ; i < num; i ++) {
    console.log(i)
  }
};
loop0UpTo10(10);


// Question 2 //
console.log("\n Question 2 returns")
const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i)
  }
};
loop5to10()


// Question 3 //
console.log("\n Question 3 returns")
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
    console.log(i)
    }
  }
};
loopEvenNumbersUpTo10()


// Question 4 //
console.log("\n Question 4 returns")
const countdown5to0 = () => {
for (let i = 5; i >= 0; i--){
  console.log(i)
}
};
countdown5to0()


// Question 5 //
console.log("\n Question 5 Returns")
const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {  // setting integer to 0, will not go over or print given argument, will increase
  console.log(i) // prints each intefer
} if (num <= 0) { // checks in the given argument is greater than or equal to 0
  console.log("Please enter a number GREATER THAN zero")  // enter valid number
}
}
loopUpToNum(0) // Please enter a number GREATER THAN zero
loopUpToNum(-1) //Please enter a number GREATER THAN zero
loopUpToNum(10) //prints 0 to 9 


// Question 6 //
const fizzbuzz = () => {
  
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
*/