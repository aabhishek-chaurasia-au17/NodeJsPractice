const fs = require('fs');

// 1. Convert to JSON. 
// 2. Add into next File.
// 3. ReadFile.
// 4. Again Convert back ti Js Object.
// 5. console.log

const aboutMe = {
    fname: 'Abhishek Chaurasia',
    age: 26,
    place: 'Delhi',
    contact: 7838083337,
    roll: 'Full Stack Developer'
}

const jsonData  = JSON.stringify(aboutMe);
fs.writeFile('json1.json', jsonData, () =>{
    console.log('Done');
})

fs.readFile('json1.json', 'utf-8', (err, data) =>{
    console.log(data);
    const orgData = JSON.parse(data)
    console.log(orgData, data);
})