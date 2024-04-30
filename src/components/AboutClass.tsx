import React,{Component} from "react";

class AboutClass extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>this is from about class component {this.props?.name}</div>
    }
}
export default AboutClass;