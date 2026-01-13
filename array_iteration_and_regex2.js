const array = [1, 2, 3, 4, 5];
// argumen index dan array digunakan kalau butuh saja, kalau cuma butuh valuenya ya masukin aja argument valuenya saja, kayak di bawah adalah element

// foreach()
array.forEach((element, index, array) => {
    console.log(element);
});

// map()
const mappedArray = array.map((element, index, array) => element * 2);
console.log(mappedArray);

// filter()
const filteredArray = array.filter((element) => element >= 3);
console.log(filteredArray);

// every() & some()
const everyOver4 = array.every((element) => element > 4);
const someOver4 = array.some((element) => element > 4);
console.log(everyOver4);
console.log(someOver4);

// indexOf()
const indexOfArray1 = array.indexOf("6");
const indexOfArray2 = array.indexOf("5");
console.log(indexOfArray1);
console.log(indexOfArray2);

// find()
const find = array.find((element) => element > 2);
console.log(find);