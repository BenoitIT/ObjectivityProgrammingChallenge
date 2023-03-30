//this is the file where all questions will be checked.
const { swapElements } = require("./QuestionOne/arrayElementSwapper");
const myArray = [1, 2, 3, 4, 5];
//swap the elements at position 1 with the elements at position 3
const result = swapElements(myArray, 1, 3);
console.log(result);

const {QuestionTwo} =require('./QuestionTwo/UrlShortener');
//calling function to generate random Short URLs and Long URLs respectively
QuestionTwo();