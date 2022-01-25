const object1 = {fruits: ['apple', 'mango', 'banana'], trees: ['banyan']}

const object2 = { trees: ['banyan'], fruits: ['apple', 'banana', 'mango']}

var comparable = o => (typeof o != 'object' || !o)? o :
Object.keys(o).sort().reduce((c, key) => (c[key] = comparable(o[key]), c), {});

console.log(JSON.stringify(comparable(object1)) == JSON.stringify(comparable(object2)));
