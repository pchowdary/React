import React,{Component} from "react";
import Child from "./Child";

class AboutClass extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        console.log("about class const")
    }
    componentDidMount(): void {
        console.log("about class componentDidMount")

    }
    render(){
        console.log("about class render")

        return <div>
            this is from about class component {this.props?.name}
            count is - {this.state.count}
            <p><button onClick={()=>{
this.setState({
    count:this.state.count+1
})
            }}>increase</button></p>
            <Child/>
            </div>
    }
}
export default AboutClass;