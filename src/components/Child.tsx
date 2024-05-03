import React from "react";
class Child extends React.Component{
    constructor(props){
        super(props)
console.log("child constrcutor");

    }
    componentDidMount(): void {
        console.log("child class componentDidMount")
    }
    render(){
        console.log("child class render")

        return (
            <div>child class</div>
        )
    }
}
export default Child;