//toString(), join(), pop(), push(), shift(), unshift(), splice(), slice(), sort()

const fruits = ['Apple', 'Banana', 'Lemon', 'Grape'];
const vege = ['Cucumber', 'Tomato'];
// const spliced = fruits.splice(2, 3, 'Cucumber', 'Tomato');
const string = fruits.toString();
const join = fruits.join(", ");
const sliced = fruits.slice(1, 5);
fruits.unshift("Putih");

console.log(fruits);
console.log(sliced);