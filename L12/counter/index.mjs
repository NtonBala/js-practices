// Launch: node --experimental-modules index.mjs
import { counter } from './counter.mjs';
import './middleware.mjs';

console.log('index:', counter);
