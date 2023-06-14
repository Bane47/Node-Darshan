const fs = require('fs');
const { json } = require('stream/consumers');

// const person = {
//     name:'Satis',
//     planet:'Earth',
//     age:20
// }

// const personJSON = JSON.stringify(person);

// const newFile = fs.writeFileSync('1-json.json',personJSON);

const databuffer = fs.readFileSync('1-json.json');
const dataJSON = databuffer.toString();
const data = JSON.parse(dataJSON)

// console.log(data.name)
data.name='Satis Kumar';
data.age=69;


const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)

// const userBuffer=fs.writeFileSync('1-json.json',userJSON);
// const userBufferText = userBuffer.toString();
// const theData = JSON.parse(userBufferText.name)


// const personArray = JSON.parse(personJSON);
