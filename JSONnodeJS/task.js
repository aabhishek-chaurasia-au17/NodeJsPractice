
const bioData = {
    name: 'Abhishek Chaurasia',
    age: 26,
    roll: 'Full Stack DeveLoper',
    place: 'Delhi'
};

console.log(bioData);

// Convert Object to JSON
const jsonData = JSON.stringify(bioData);

// Convert JSON to Object
const objData = JSON.parse(jsonData);

console.log(objData.name);