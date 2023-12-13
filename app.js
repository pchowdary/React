import React from 'react';
import ReactDOM from 'react-dom';

//jsx is converted into again react.createelement i.e is a JS object converted into html element on render
const elem1 =<span>elem1</span>;
const Comp1 = ()=> <h1> this is a comp1</h1>
const Comp2 = ()=>{
    return( <div>
        <Comp1></Comp1>
    <h1>this is from compoenent 2</h1>
    </div>)
}
const elem2 =<h1>{elem1}elem2<Comp2/></h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Comp2());
