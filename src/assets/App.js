require("dotenv").config();

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log(`Je suis ${name}, wilder à ${city}, et j'adore ${language}.`);
