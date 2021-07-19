// ASSESSMENT 2: Coding practical questions with Jest

const { capitalize } = require("lodash");

// const { expect } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// // $ yarn add jest

// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest

// // Reminder: The test will call your function
// // Name a test and create 3 expects for var->var3
// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// // a) Create a test with expect statements for each of the variables provided.
// var num1 = 15
// // Expected output: "15 is divisible by three"
// var num2 = 0
// // Expected output: "0 is divisible by three"
// var num3 = -7
// // Expected output: "-7 is not divisible by three"
// describe("divBy3",()=>{
//     it("returns wether a number is divisble by 3", ()=>{
//         expect(divBy3(num1)).toEqual(`${num1} is divisble by three`);
//         expect(divBy3(num2)).toEqual(`${num2} is divisble by three`);
//         expect(divBy3(num3)).toEqual(`${num3} is not divisble by three`);
//     })
// })
// //function name is divBy3
// //it will take input integers and then see if they divide by 3
// //if statement to sort for 3 answer div by 3, not div by 3, value error
// //decided by a ternary operator
// const divBy3 = (number)=>{
//      if (number % 3 === 0){
//         return   `${number} is divisble by three`
//      }else if (number % 3 !== 0){
//         return   `${number} is not divisble by three`
//      }else{ return `Value Error ${number} incorrect please input a number`

//      }
// }
// //YAAAAAY!!!!!

// // b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

 //a) Create a test with expect statements for each of the variables provided.
//  describe("capitalize",()=>{
//      it("returns a list of capitalized words", ()=>{
//          expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
//          expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]);   
//      })
//  })
var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// create a function called capitalize
//function takes in an array.
// use .map to iterate and create a new array with eath index of 0 being capitalized
// splits the array into individual strings 
// slice and create a new list of uppercase letters, while retaining an old list of all other letter not in at the 0th index
// finaly concat to put the 2 arrays together and return them. 
//

// b) Create the function that makes the test pass.
// const capitalize = (array) =>{//array[0][0]
//     return capitalizeArray = array.map(value =>{
//            splitArray = value.split("")
//            slicedArray = value.slice(1)
//            let upperCaseLetter = []
//            upperCaseLetter = splitArray[0].toUpperCase()
//            return upperCaseLetter.concat(slicedArray)      
//     })
    
// }
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided. *****
// describe("capitalize",()=>{
//      it("returns a list of capitalized words", ()=>{
//           expect(capitalize(vowelTester1)).toEqual(1);
//           expect(capitalize(vowelTester1)).toEqual(0);
//           expect(capitalize(vowelTester1)).toEqual(2);   
//          })
//      })

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2



// // b) Create the function that makes the test pass.
// // function that takes in a string
// // iterates through the word and find the FIRST vowel and logs that number. 
// //.filter will work for this method
// use indexOF()
// you could also iterate through 2 sepererate lists and compare the array of [a,e,i,o,u] 
const vowelFinder = (string)=>{
    for (let index = 0; index < array.length; index++) {
        string = array[index];
        console.log(array)
        
    }

}

console.log(vowelFinder("learn"))
