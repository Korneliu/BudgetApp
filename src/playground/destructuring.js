const person = {
  name: 'Max',
  age: 44,
  location: {
    city: 'Aliso',
    temp: 80
  }
};

const { name: firstName = 'anonymous', age } = person

/* const name = person.name;
const age = person.age */

//console.log(`${firstName} is ${age}`)

//rename temp ->temperature
//default 
/* const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
} */
// const { name: publisherName = 'Self-Published' } = book.publisher

//console.log(`${publisherName}`) 

// Array destructuring ---------------------------------------


const address = ['70 Sobrante', 'Aliso', 'California', '92656'];

const [, city, state = 'California', zip] = address

console.log(`You are in ${city} ${state}.`)