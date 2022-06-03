/*
    CIT 281 Project 2
    Name: Felice Lee
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// get a single, random, lowercase letter
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//get a random length string
function getRandomString(minLength, maxLength){
    let result = "";
    let lengthOfOutputString = getRandomInteger(minLength, maxLength + 1);
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
    return result;
}

console.log(getRandomString(10,20));

// get a string in ascending order
function getSortedString(string){
    return string.split('').sort().join('');
}  
console.log(getSortedString(getRandomString(10,20)))

//const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

