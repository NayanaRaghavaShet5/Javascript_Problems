const object1 = { fruits: ['apple', 'mango', 'banana'], trees: ['banyan'] }
const object2 = { fruits: ['apple', 'mango', 'banana'], trees: ['banyan'] }

const object3 = { fruits: ['banana', 'mango', 'apple'], trees: ['banyan']}


function objectsAreEqual(a, b) {
  if(Object.getOwnPropertyNames(a).length !== Object.getOwnPropertyNames(b).length ) return false
    for (var prop in a) {
      if (a.hasOwnProperty(prop)) {
        if (b.hasOwnProperty(prop)) {
          if (typeof a[prop] === 'object') {
            if (!objectsAreEqual(a[prop], b[prop])) return false;
          } else {
            if (a[prop] !== b[prop]) return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }

  var result = Object.keys(object1).every((key) =>  object1[key] === object3[key])
  
  console.log('result', result);
  //console.log(objectsAreEqual(object1, object2));