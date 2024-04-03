const name = 'John Doe';
const age = 26;
const passions = ['Ski', 'Hiking', 'Cinema'];

console.log(name, age, passions);
const userInformation = require('./userInformation');
console.log(`Hi, my name is ${userInformation.name} and I'm ${userInformation.age} years old`);
userInformation.displayPassions();