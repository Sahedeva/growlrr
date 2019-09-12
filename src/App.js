import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import NewGrowl from './components/NewGrowl';
import Growl from './components/Growl';
import _ from 'lodash';

class App extends Component {
// constructor
  constructor(props){
    super(props);

    this.state = {
      user: {},
      growls: {}
    }
}
//component did mount fxn
componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        document.getElementById("title").classList.add("loginTitle");
        document.getElementById("title").classList.remove("logoutTitle");
        document.getElementById("headImg").classList.add("loginImg");
        document.getElementById("headImg").classList.remove("logoutImg");
        // User is signed in.
      } else {
        this.setState({user: {} })
        document.getElementById("title").classList.remove("loginTitle");
        document.getElementById("title").classList.add("logoutTitle");
        document.getElementById("headImg").classList.remove("loginImg");
        document.getElementById("headImg").classList.add("logoutImg");
        // No user is signed in.
      }
    });
    firebase.database().ref('/growls').on('value', snapshot => {
      let growls = snapshot.val();
      this.setState({growls})
    });
  }
// react methods
  _sessionButton() {
      if (_.isEmpty(this.state.user)) {
        return <LoginButton firebase={firebase}>
          Login
        </LoginButton>
      } else {
        return <LogoutButton firebase={firebase}>
          Logout
        </LogoutButton>
      }
  }

  _sessionForm() {
      if (_.isEmpty(this.state.user)) {
        return
      } else {
        return <NewGrowl user={this.state.user} firebase={firebase} />
      }
  }

// render fxn
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="pull-left">
          <span id="title">Growlrr</span>
            <img id="headImg" src={this.state.user.photoURL} className="avatar" role="presentation"/>
            <span id="avatar-name">{this.state.user.displayName}</span>
            {this._sessionButton()}
          </div>

          
          {this._sessionForm()}
        </div>
        <div className="App-body container">
          <ul className="growlUl">
            {_.map(this.state.growls, (growl, id) =>
                <Growl user={this.state.user} id={id} growl={growl} key={id} firebase={firebase} />
            ).reverse()}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
