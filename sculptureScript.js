const sculptureList = require('./data.js'); // import data.js

//creating an empty object to store the results
const sculptureListLengths = {};

//Using a loop to iterate through each of the objects in sculptureList
for (let i = 0; i < sculptureList.length; i++) {

    // Get the current sculpture object
    const sculpture = sculptureList[i];

    // Create an object to store lengths
    const storeLength = {};

    for (const key in sculpture) {
        if (typeof sculpture[key] === "string") {

            // Get the length of the string
            storeLength[key] = sculpture[key].length;
        }
    }

    // Store in sculptureListLengths
    sculptureListLengths[i] = storeLength; 
}

//output
console.log(sculptureListLengths); 