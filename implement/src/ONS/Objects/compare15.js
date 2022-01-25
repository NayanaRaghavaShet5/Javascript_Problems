const object1 = { fruits: ['apple', 'mango', 'banana'], trees: ['banyan'] }
//const object2 = { fruits: ['apple', 'mango', 'banana'], trees: ['banyan'] }

const object3 = { fruits: ['banana', 'mango', 'apple'], trees: ['banyan']}

// const compareObjects = (a, b) => { 
//     let s = (o) => Object.entries(o).sort().map(i => { 
//        if(i[1] instanceof Object) i[1] = s(i[1]);
//        return i 
//     }) 
//     return JSON.stringify(s(a)) === JSON.stringify(s(b))
//   }
  
 
  
  function areEqual(obj1, obj2) {
    var a = JSON.stringify(obj1), b = JSON.stringify(obj2);
    if (!a) a = '';
    if (!b) b = '';
    return (a.split('').sort().join('') == b.split('').sort().join(''));
}

console.log(areEqual(object1, object3));