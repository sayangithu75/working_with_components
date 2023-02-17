import React , {Component} from "react"

class ChildComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"child Component"
        }
    }
    // shouldComponentUpdate(){
    //     return false;
    // }
    static getDerivedStateFromProps(props,state){
        console.log(state)
        console.log(props)
        return {name: props.nameFromParent}
    }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({name:" component Didmount method"})
            // console.log(this.state.name)
        },5000)
    }
    render(){
        return(
            <div>
                <p>This is {this.state.name}</p>
            </div>
        )
    }

}

class parentComponent extends Component{
    render(){
        return(
            <div>
                <ChildComponent nameFromParent="get derived from parent component"/>
            </div>
        )
    }
}

export default parentComponent