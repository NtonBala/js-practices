"use strict";

const user = {
  name: 'Walter',
  city: 'Berlin',
  skills: {
    driving: true,
    programming: {
      languages: {
        javascript: 'advanced',
        python: 'intermediate',
        swift: 'intermediate',
      },
    },
  },
};

const {
  city,
  skills: {
    driving,
    programming,
    programming: {
      languages: {
        javascript,
        python,
        ruby = 'intermediate'
      },
      environments: platforms = {},
      qa: {
        manual = 'beginner'
      } = { manual: 'beginner' }
    }
  }
} = user;

console.log(ruby, manual, platforms);
// intermediate beginner {}
