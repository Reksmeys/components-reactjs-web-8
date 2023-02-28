// create class components
import React from 'react'
class Table extends React.Component{
    // constructor 
    // state; private variable
    constructor(props){
        super(props)
        this.state = {
            title: "Graphic Design Masterclass",
            desc: "Rooms oh fully taken by worse do Points afraid but may end Rooms"
        }
    }
    changeStudent = () => {
        // change value of state, we used setState()
        console.log("function called");
        this.setState({
            title: "Create a Design System in Figma",
            desc: "Rooms oh fully taken by worse do. Points afraid but may end afraid but"
        })
    }
    componentDidMount(){
        // this mothod run only first time create component
    }

    render(){
        console.log("render in Table");
        return(
            <div className="card">
                <h5 className="card-header">Course Available</h5>
                <div className="card-body">
                    <img src="https://eduport.webestica.com/assets/images/courses/4by3/02.jpg" className="img-fluid" alt="course"/>
                    <h5 className="card-title mt-2">{this.state.title}</h5>
                    <p className="card-text">{this.state.desc}</p>
                    {
                        this.state.title.length > 0 && <h2>You have {this.state.title.length} unread message</h2>
                    }
                    <a href="#" className="btn btn-primary" onClick={this.changeStudent}>Change Value</a>
                </div>
            </div>
        )
    }
}
export default Table