const numbers = [
    [1, 1, 1], 
    [2, 2, 2]
];
const clonedNumbers = [...numbers];

console.log(numbers," This is the original numbers array. ")

clonedNumbers[0][1] = '🌭';
clonedNumbers[0] = '🍔';

console.log(clonedNumbers, "This is a copy of the numbers array using spread.")
console.log(numbers, "This is the original numbers array, there is a hotdog because spread operator only shallow copy the first level of an array, if the changed data is in deeper levels, it will change the original value because it is referring to the orignal value.");