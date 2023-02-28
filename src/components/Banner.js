import React, { Component } from 'react'

export default class Banner extends Component {
  constructor(props){
      super(props)
      console.log("constructor in banner");
  }
  componentDidMount(){
    console.log("didmount in banner");
  }
  render() {
    console.log("render in baner components");
    return (
        <div className="container-fluid py-5 bg-white">
            <h1 className="display-5 fw-bold">{this.props.title}</h1>
            <p className="col-md-8 fs-4">{this.props.desc}</p>
            <button className="btn btn-primary btn-lg" type="button">{this.props.btnTitle}</button>
        </div>
    )
  }
}
