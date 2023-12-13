import React from 'react';
import ReactDOM from 'react-dom';

//jsx is converted into again react.createelement i.e is a JS object converted into html element on render
const h1 = <h1>pinki</h1>;
console.log(h1)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1);