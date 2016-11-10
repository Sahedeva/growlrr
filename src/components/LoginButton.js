import React, { Component } from 'react';

export default class LoginButton extends Component{
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick(e){
    e.preventDefault();
    let provider = new
    this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider)
  }

  render(){
    return(<button onClick={this._handleClick} className="btn btn-success btn-lg pull-right vcent">{this.props.children}</button>)
  }
}
