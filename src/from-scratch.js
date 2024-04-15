// Question 1 //
console.log("\n Question 1 returns")
const loop0UpTo10 = (num) => {
  for (let i = 0 ; i < 10; i ++) {
    console.log(i)
  }
};
loop0UpTo10();


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
  for (let i = 0; i < 10; i +=2) {
    console.log(i)
  }
};
loopEvenNumbersUpTo10()

/* Original - ran, but if statement was not necessary
console.log("\n Question 3 returns")
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
    console.log(i)
    }
  }
};
loopEvenNumbersUpTo10()
*/

// Question 4 //
console.log("\n Question 4 returns")
const countdown5to0 = () => {
  for (let i =5; i >= 0; i--) {
  console.log(i)
  }
};
countdown5to0();


// Question 5 //
console.log("\n Question 5 Returns")
const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {  // setting integer to 0, will not go over or print given argument, will increase
  console.log(i) // prints each intefer
}
};
loopUpToNum(0) // Please enter a number GREATER THAN zero
loopUpToNum(-1) //Please enter a number GREATER THAN zero
loopUpToNum(10) //prints 0 to 9 

/* Original
const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {  // setting integer to 0, will not go over or print given argument, will increase
  console.log(i) // prints each intefer
} if (num < 0) {
  console.log("INVALID : enter number that is GREATER than 0")
}
};
loopUpToNum(0) // Please enter a number GREATER THAN zero
loopUpToNum(-1) //Please enter a number GREATER THAN zero
loopUpToNum(10) //prints 0 to 9 
*/

// Question 6 //
console.log("\n Question 6 Returns")
const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};


module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};