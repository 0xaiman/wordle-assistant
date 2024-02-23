import allWords from './words.js';

const checkBtn = document.getElementById("check-btn");
// const allWords = require('./words');
// console.log(allWords);


function displayPossibleWords() {
    var possibleWords = document.getElementById("possible-words");

    var olElement = document.createElement("ol");

    allWords.forEach((item)=>{
    var liElement = document.createElement("li");
    liElement.textContent = item;
    olElement.appendChild(liElement)

    })
    possibleWords.innerHTML="";

    possibleWords.appendChild(olElement)

}

checkBtn.addEventListener("click",displayPossibleWords)

// register eleimnated letters into array

const eliminatedLetters = document.querySelectorAll('.eliminate-letter-button');
const eliminatedLettersArray = []

eliminatedLetters.forEach(button => {
    button.addEventListener("click", function() {
    // console.log(button.id);
    const letter = button.id;
    const index = eliminatedLettersArray.indexOf(letter);

    if(index !== -1){

        eliminatedLettersArray.splice(index, 1);
    }else{
        eliminatedLettersArray.push(letter);
    }
    console.log(eliminatedLettersArray)

})
}
)