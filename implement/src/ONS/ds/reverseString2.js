const word = "nayan";
let letters = [];

let fword = '';

const reverse = (word) => {
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }

    for (let j = 0; j < word.length; j++) {
        fword = fword + letters.pop();
    }

    if (fword === word) {
        console.log("palindrome")
    } else {
        console.log("not palindrome")
    }
}

reverse(word);