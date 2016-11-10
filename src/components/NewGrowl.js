import React, { Component } from 'react';
import '../App.css';

export default class NewGrowl extends Component{
  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this)
    this._handleChange = this._handleChange.bind(this)
  }

  componentDidMount(){
    console.log('hey!!!');
    document.getElementById('growlTextArea').focus();
    document.getElementById('growlTextArea').select();
    document.getElementById('growlLength').style.color = "green";
  }

  _handleChange(e){
    let len = this.refs.growl.value.length;
    console.log('len: ',len)
    if (len>141){
      console.log('got to len >141');
      document.getElementById('growlLength').style.color = "red";
    } else {
      console.log('got to else');
      document.getElementById('growlLength').style.color = "green";
    }
    document.getElementById('growlLength').innerHTML = 141-len;
  }

  _handleSubmit(e){
      e.preventDefault();
      // let title = this.refs.title.value;
      let growl = this.refs.growl.value;
      let created_at = Date.now();
      console.log('created_at:',created_at);
      var growlObj = {
        growl,
        [this.props.user.uid]: true,
        username: this.props.user.displayName,
        userAvatar: this.props.user.photoURL,
        created_at
      }
      console.log(growlObj);
      this.props.firebase.database().ref(`/growls`).push(growlObj).then(()=>{
        // this.refs.title.value = "";
        this.refs.growl.value = "";
        document.getElementById('growlLength').innerHTML = 141;
        document.getElementById('growlTextArea').focus();
        document.getElementById('growlTextArea').select();
        // document.getElementById('titleId').focus();
        // document.getElementById('titleId').select();
      }).catch((e)=>{
        // let tooMany = growl.length-141;
        // _tooLong(tooMany);
        alert(`Your growl is ${growl.length - 141} characters too long!`);
        console.log('e',e);
      });

    }

// _handleClick(e){
//   e.preventDefault()
//   let provider = new
//   this.props.firebase.auth.GoogleAuthProvider();
//   this.props.firebase.auth().signInWithPopup(provider)
// }
/* <input type="text" ref="growl" placeholder="Enter New Growl Here"/> */
  render(){
    return(
      <div className="modal-dialog" id="popup_tool_mouseposition" data-backdrop="false">
    <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title" data-i18n="tool.mouseposition.title">Compose New Growl</h4>
        </div>
        <div className="modal-body">
          <form id="growlForm" onSubmit={this._handleSubmit} onChange={this._handleChange}>
            <textarea id="growlTextArea" rows="4" cols="70" ref="growl" name="growl" form="growlForm" placeholder="Enter New Growl Here"></textarea>
            <div className="NewGrowlButton">
              <span id='growlLength'>141</span>
              <button className="btn btn-success" type="submit"><span className="glyphicon glyphicon-flash" aria-hidden="true"></span>Growl!</button>
            </div>
          </form>
        </div>
    </div>
</div>
    )

  }
}
