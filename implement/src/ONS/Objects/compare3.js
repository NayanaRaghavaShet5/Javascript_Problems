const object1 = {fruits: ['apple', 'mango', 'banana'], trees: ['banyan']}

const object2 = { trees: ['banyan'], fruits: ['apple', 'mango', 'banana']}

function objectEquals(obj1, obj2) {
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i)) {
            if (!obj2.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    for (var i in obj2) {
        if (obj2.hasOwnProperty(i)) {
            if (!obj1.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    return true;
}

console.log(objectEquals(object1, object2));