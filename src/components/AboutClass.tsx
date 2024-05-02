import React,{Component} from "react";

class AboutClass extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){
        return <div>
            this is from about class component {this.props?.name}
            count is - {this.state.count}
            <p><button onClick={()=>{
this.setState({
    count:this.state.count+1
})
            }}>increase</button></p>
            </div>
    }
}
export default AboutClass;