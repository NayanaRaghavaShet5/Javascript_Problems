let myStr = '  Nayana. Gender: Female. Origin:  ';

console.log(myStr.length); //35
console.log(myStr.trim()); // Nayana. Gender: Female. Origin:
console.log(myStr.toLowerCase());// lower case
console.log(myStr.toUpperCase()); // upper case
console.log(myStr.split()); // ["  Nayana. Gender: Female. Origin:  "]
console.log(myStr.split(''));//[" ", " ", "N", "a", "y", "a", "n", "a", ".", " ", "G", "e", "n", "d", "e", "r", ":", " ", "F", "e", "m", "a", "l", "e", ".", " ", "O", "r", "i", "g", "i", "n", ":", " ", " "]
console.log(myStr.split(' ')); //["", "", "Nayana.", "Gender:", "Female.", "Origin:", "", ""]
console.log(myStr.split(':'));//["  Nayana. Gender", " Female. Origin", "  "]
console.log(myStr.charAt(10));// G
console.log(myStr[4]); //y
console.log(myStr);
console.log(myStr.slice(3)); //"na. Gender: Female. Origin:  "
console.log(myStr.substring(6)); //"na. Gender: Female. Origin:  "
console.log(myStr.substr(6,3)); //"na."
