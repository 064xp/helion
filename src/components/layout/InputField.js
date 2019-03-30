import React from 'react'
import firebase from '../../Firebase';

import './inputField.css';
import sendIcon from '../../img/paper-plane-solid.svg';

// TODO:
// Style form, make responsive
// Add submit functionality

var db = firebase.firestore();

class Input extends React.Component {

  onSubmit = e => {
    e.preventDefault();
    alert('sent');
  }

  render () {
    return(
      <form action="#" onSubmit={this.onSubmit.bind(this)} id="idea-form">
        <h2>Share your thoughts with the world...</h2>
        <input type="text" name="author" placeholder="Who are you?"/>
        <textarea type="text" name="content" placeholder="Share your thoughts..." rows="6" />

        <button class="btn-submit" type="submit"><img src={sendIcon} alt="send"/></button>
      </form>
    )
  }
}

export default Input;
