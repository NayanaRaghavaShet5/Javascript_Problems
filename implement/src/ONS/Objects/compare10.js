const object1 = { fruits: ['apple', 'mango', 'banana'], trees: ['banyan'] }

const object2 = { fruits: ['apple', 'banana', 'mango'], trees: ['banyan'] }


function deepEqual(x, y) {
    return (x && y && typeof x === 'object' && typeof y === 'object') ?
      (Object.keys(x).length === Object.keys(y).length) &&
        Object.keys(x).reduce(function(isEqual, key) {
          return isEqual && deepEqual(x[key], y[key]);
        }, true) : (x === y);
  }
  
  console.log(deepEqual(object1, object2));