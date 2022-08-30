const prompt = require('prompt-sync')();

const people =  [
    { name: "Joao", age: 21 },
    { name: "Ze", age: 45 }

]

function addObj(arr) {
    var newObj = {};

    newObj.name = prompt('Type in your name: ');
    newObj.age = prompt('Type in your age: ')

    arr.push(newObj);
}

addObj(people);
