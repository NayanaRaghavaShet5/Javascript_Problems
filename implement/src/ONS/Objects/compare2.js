//import _ from "lodash";
const _ = require('lodash'); 
const object1 = {fruits: ['apple', 'mango', 'banana'], trees: ['banyan']}

const object2 = { trees: ['banyan'], fruits: ['apple', 'mango', 'banana']}

var result = _.isEqual( object1 , object2 )

console.log(result);
//console.log(JSON.stringify(object1, Object.keys(object1).sort()) === JSON.stringify(object2, Object.keys(object2).sort()));