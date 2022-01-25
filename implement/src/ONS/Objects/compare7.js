
const object1 = { fruits: ['apple', 'mango', 'banana'], trees: ['banyan'] }

const object2 = { fruits: ['banana', 'mango', 'apple'], trees: ['banyan']}

const typeOf = x => ({}).toString.call(x).match(/\[object (\w+)\]/)[1]

function areSimilar(a, b) {
    const everyKey = f => Object.keys(a).every(f)

    switch (typeOf(a) && typeOf(b)) {
        case 'Array':
            return a.length === b.length &&
                everyKey(k => areSimilar(a.sort()[k], b.sort()[k]));
        case 'Object':
            return Object.keys(a).length === Object.keys(b).length &&
                everyKey(k => areSimilar(a[k], b[k]));
        default:
            return a === b;
    }
}


console.log(areSimilar(object1, object2));
