'use strict';

const color = 'green';

// Good practice will be to use curly braces, this will limit block:
switch (color) {
  case 'green': {
    console.log('START');
    break;
  }

  case 'red': {
    console.log('STOP');
    break;
  }

  default: {
    console.log("I don't know this color!");
  }

}
