const a = 1;
const b = 10;
const c = 100;

// call stack
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');

// Call stack

//Web api

//Callback queue

//Event loop

/* const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}
one();

// Recursion
function foo() {
    foo()
}

foo(); */

// IIFE
/* var myApp = {};

(function() {
    myApp.add = function(a, b) {
        return a + b;
    }
})(); */

// CommonJS + Browserify
// js1 file1
/* module.exports = function add (a, b) {
    return a + b;
}

// js2 file 2
var add = require("./add"); */

// ES6+Wepack2
//js1
/* export const add = (a, b) => a+b;
//or
export default function add() {
    return a + b;
}
// js2
import { add } from '/.add';
//or
import add from './add'; */

//webpack
/* module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    ]
} */