import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'
import _ from 'lodash';
import '../App.css';
import moment from 'moment';


class Growl extends Component {
  constructor(props) {
    super(props);

    this._handleDelete = this._handleDelete.bind(this)
    this._sessionDelete = this._sessionDelete.bind(this)
}
  _sessionDelete() {
    let array = Object.keys(this.props.growl);
      if (array.indexOf(this.props.user.uid) {
        return <a className="btn btn-danger" href='#' onClick={this._handleDelete}>Delete</a>
      } else {
        return
      }
}

  _handleDelete(e) {
    e.preventDefault();
    this.props.firebase.database().ref(`/growls/${this.props.id}`).remove();
}

  render() {
    return(
    <div className="all-growls">
      <li className="list">
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-2">
          <img src={this.props.growl.userAvatar} className="avatar" role="presentation"/>
          </div>
          <div className="col-xs-7">
            <div className="row">
              <div className="col-xs-12">
                {this.props.growl.username}
                {'  '}
                <span className="glyphicon glyphicon-hourglass"></span>
                <span data-tip={moment(this.props.growl.created_at).format('MMMM Do YYYY, h:mm:ss a')}>{moment(this.props.growl.created_at).fromNow()}</span>
                <ReactTooltip />

              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <pre>{this.props.growl.growl}</pre>
              </div>
            </div>
          </div>
          <div className="col-xs-2">
            <span className="delete-link">{this._sessionDelete()}</span>
          </div>
        </div>
      </div>
      </li>
    </div>
    )
  }
}

export default Growl;
