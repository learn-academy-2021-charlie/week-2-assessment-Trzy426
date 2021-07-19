// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer: it will create an array of individual strings
// b) Verify and explain: verified it does create an individual list of strings in an array


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: will create a string with the output "hello, LEARN Student"
// b) Verify and explain: it would create that string if there was a return on line 20


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: creates a new array of value's * by 2
// b) Verify and explain:verified, important to note that .map takes and creates a new array while iterating over the old array


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer:creates an array of only EVEN numbers 
// b) Verify and explain: % 2 === 0 checks for if 2 goes into the number with no remainder this would mean even, for od it is % 2 !== 0


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
 console.log(learnStudent)

// a) Your answer: new Learn creates a new instance(object) of Learn called learnStudent which is the class learn and console log its class
// b) Verify and explain: verified 
