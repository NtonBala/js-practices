const ajv = require('ajv')(); // connect ajv module

// To check entity we need schema:
// To get more details how it works check JSON Schema: https://json-schema.org/
const schema = {
    type: 'object', // defines that checked entity must be an object
    properties: { // defines properties checked object contains
        name: { // defines property key
            type: 'string', // defines that this property must bo of 'string' type
            // to get more info about options available,
            // check JSON schema 'string' validation:
            // https://json-schema.org/understanding-json-schema/reference/string.html
        },
    },
    required: ['name'], // defines properties that are required
};

// Function that checks data entity and returns 'name'
const getName = data => {
    const validate = ajv.compile(schema); // collect schema

    // check passed data
    if (!validate(data)) { // if object does not match schema throw error
        throw new TypeError(validate.errors[0].message);
    }

    return data.name; // if does, return property value
};

// Data to check in getName()
const person = {
    name: 2, // 'John'
};

// Code to implement actual check:
try {
    const name = getName(person);
    console.log(name);
} catch (err) {
    console.log('Error:', err.message);
}
