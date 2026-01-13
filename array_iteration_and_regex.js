let flatten = (array) => {
    let result = [];
    array.forEach(element => {
        if (Array.isArray(element)) {
            result.push(...flatten(element));
        }
        else {
            result.push(element);
        }
    });
    return result;
};

let nestedArray = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nestedArray));