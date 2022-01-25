const object1 = {fruits: ['apple', 'mango', 'banana'], trees: ['banyan']}

const object2 = { trees: ['banyana'], fruits: ['apple', 'nanana', 'mango']}

console.log(JSON.stringify(object1, Object.keys(object1).sort()) === JSON.stringify(object2, Object.keys(object2).sort()));