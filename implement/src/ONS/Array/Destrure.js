const alpha = ['A', 'B', 'C', 'D', 'E','F'];
const num = [1,2,3,4,5];

const [a,,c, ...rest] = alpha;

console.log(a);
console.log(c);
console.log(rest); //this will give the remaining elements [D,E,F]

const comb = [...alpha, ...num];
console.log(comb); //to combine the arrays