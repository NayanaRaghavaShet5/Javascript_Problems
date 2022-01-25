const str = "aadbjjdfsbsbbsbcsa";

const firstDuplicate = (str) => {
    for (i = 0; i < str.length; i++) {
        let seenDuplicate = false;
        for (j = 0; j < str.length; j++) {
            if (str.charAt(i) === str.charAt(j) && (i !== j)) {
                seenDuplicate = true;
                break;
            }
        }
        if (!seenDuplicate) {
            return str.charAt(i)
        }
    }
}

console.log('firstDuplicate', firstDuplicate(str));