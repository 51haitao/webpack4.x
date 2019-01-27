let createDomElement = () => {
    let div = document.createElement('div');
    let content = "Hello ";
    const NAME = "ES6";
    div.innerHTML = content + NAME;
    return div;
}

document.body.appendChild(createDomElement());

import './css/a.css'

let a = require('./a');

let dachui = (str) => {
    alert(str);
}

dachui('hello Python');


a.Test();


let arr = {
    0: 'tom',
    1: '65',
    2: '男',
    3: ['jane', 'john', 'Mary'],
    'length': 4
}

let arr1 = Array.from(arr)
console.log(arr1)


function func(a, b, ...rest) {
    console.log(rest);
}