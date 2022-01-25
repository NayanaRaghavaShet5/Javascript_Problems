let value = "nayanshet";

const reverse = (value) => {

    let reverseStr = '';

    for (i = value.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + value[i];
    }
    if (reverseStr === value) {
        console.log('palindrome');
    } else {
        console.log('not palindrome');
    }
}

reverse(value);