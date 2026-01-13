const person = {
    name: "Nia",
    age: 30,
    city: "Jakarta",
}

function getPersonInfo(person) {
    const { name, age, city } = person;
    return `Name: ${name}, Age: ${age}, City: ${city}`;
}

console.log(getPersonInfo(person));