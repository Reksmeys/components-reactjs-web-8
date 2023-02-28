// create class components
import React from 'react'
class Table extends React.Component{
    // constructor 
    // state; private variable
    constructor(props){
        super(props)
        this.state = {
            fullname: "Vandeth",
            age: 30
        }
    }
    changeStudent = () => {
        // change value of state, we used setState()
        console.log("function called");
        this.setState({
            fullname: "Mengheang",
            age: 40
        })
    }
    componentDidMount(){
        // this mothod run only first time create component
    }

    render(){
        console.log("render in Table");
        return(
            <div className="card">
                <h5 className="card-header">{this.state.fullname}</h5>
                <div className="card-body">
                    <img src="https://dummyimage.com/800x300/dddddd/fff.png&text=Responsive+Image" className="img-fluid" alt="..."/>
                    <h5 className="card-title">He is {this.state.age}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary" onClick={this.changeStudent}>Change Value</a>
                </div>
            </div>
        )
    }
}
export default Table