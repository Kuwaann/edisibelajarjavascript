const vtoFixed = 10.12345.toFixed(1);
const vtoPrecision = 10.12345.toPrecision(1);
const vparseFloat = parseFloat("10.12345");
const vtoString = 10.12345.toString(10.12345)
const vnumber = Number(vtoString);

console.log(vtoFixed);
console.log(vtoPrecision);
console.log(vparseFloat);
console.log(vtoString);
console.log(vnumber);