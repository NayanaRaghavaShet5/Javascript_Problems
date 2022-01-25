const object1 = {fruits: ['apple', 'mango', 'banana'], trees: ['banyan']}

const object2 = { trees: ['banyan'], fruits: ['apple', 'mango', 'banana']}

function equals(obj1, obj2) {
    function _equals(obj1, obj2) {
        return JSON.stringify(obj1)
            === JSON.stringify($.extend(true, {}, obj1, obj2));
    }
    return _equals(obj1, obj2) && _equals(obj2, obj1);
}

console.log(equals(object1, object2));