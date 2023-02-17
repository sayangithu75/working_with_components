import React,{Component} from 'react'

class Update extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"normal update component"
        }
    }
    shouldComponentUpdate(){
        return true;
    }
    componentDidMount(){
        setTimeout(()=>{

            this.setState({name:"component did mount"})
        },5000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById('previousState').innerHTML="I was "+prevState.name
        return prevState
    }
    componentDidUpdate(prevState){
        if(prevState.name!==this.state.name)
        {
            document.getElementById('currentState').innerHTML="Now i am updated with " + this.state.name
        }
    }
    render(){
        return(
            <div>
                <p>hello i am {this.state.name}</p>
                <p id="previousState"></p>
                <p id="currentState"></p>
            </div>
        )
    }
}

export default Update