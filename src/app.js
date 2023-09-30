import minus, { square, add } from './utils';
import validator from 'validator';

console.log('App is running');

console.log(square(9));
console.log(add(20,40));
console.log(minus(50, 70));

console.log(validator.isEmail('test.know@gmail.com'));

import ReactDOM from 'react-dom';
import React from 'react';

const template = React.createElement('h2', {}, 'heading 2');
ReactDOM.render(template, document.getElementById('app'));
