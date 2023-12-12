import React from 'react';
import ReactDOM from 'react-dom';

var h1 = React.createElement("div", { id: "first div" },
    React.createElement(
        "div", { id: "second div" },
        React.createElement("h1", { id: "heading" }, "hello world testing parcel1234567"
        )));
       console.log(h1); 
       var root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(h1);