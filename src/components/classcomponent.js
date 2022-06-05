import { Component } from "react"

class ClassComponent extends Component{

    render(){
    return(
        <h2>hello dear {this.props.data}</h2>
    )}
}

export default ClassComponent