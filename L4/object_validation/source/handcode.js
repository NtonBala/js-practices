// Example how index.js validation could be performed by hand.

// Data to check:
const person = {
    name: 'John',
};

// Actual validation:
// This way we should validate all the props.
if (typeof person.name !== 'string') {
    throw new Error('should be a string');
}

if (!person.name) {
    throw new Error('should have a required property \'name\'');
}

if (person.name.trim().length < 2) {
    throw new Error('\'name\' should contain more than 2 letters');
}
// ...
