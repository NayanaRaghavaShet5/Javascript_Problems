
let word = "racecar";

let letters = [];
let fword = "";

const reverseStringStack = (word) => {

    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }

    for (let j = 0; j < word.length; j++) {
        fword += letters.pop();
    }

    if (fword === word) {
        console.log('palindrome');
    } else {
        console.log('not - palindrome');
    }
}

console.log(reverseStringStack(word));