'use strict';

// Good practice
// When registering a person - his email is saved to the database.
// But email can be written in both ways: 'lastname@gmail.com' or 'Lastname@gmail.com'.
// Though email service will treat both of them as the same email address,
// but to JS they are different strings: 'lastname@gmail.com' !== 'Lastname@gmail.com'.
// That's why before saving email to the database, it should be translated into lowercase:
const email = 'Lastname@gmail.com';
const lowercasedEmail = email.toLowerCase();
