import React from 'react'
import firebase from '../../Firebase';

import './inputField.css';
import sendIcon from '../../img/paper-plane-solid.svg';
import * as hf from '../helperFunctions';

// TODO:
// Style form, make responsive
// Add submit functionality

var db = firebase.firestore();

class Input extends React.Component {

  onSubmit = e => {
    e.preventDefault();
    //get the input fields from the form
    const author = document.querySelector('#form-author'),
          content = document.querySelector('#form-content');

    //put the values from the fields into a new object
    const newFloater = {
      author: author.value,
      content: content.value,
      time: Date.now(),
      date: hf.getDate()
    }

    //validation
    if(newFloater.author === ''){
      newFloater.author = 'Anonymous';
    };
    if(newFloater.content === ''){
      //send notification
      alert('You must write something!');
      return;
    }

    //send to db
    this.addFloater(newFloater);

    //clear the form
    author.value = '';
    content.value = '';
  }

  addFloater = (floater) =>{
    db.collection('floaters').add(floater)
      .then(docRef => {
        alert('message sent!');
      })
      .catch(err => {
        alert('Something ocurred while sending message, please try again later');
      });
  }

  render () {
    return(
      <form action="#" onSubmit={this.onSubmit.bind(this)} id="idea-form">
        <h2>Share your thoughts with the world...</h2>
        <input type="text" id="form-author" placeholder="Who are you?"/>
        <textarea type="text" id="form-content" placeholder="Share your thoughts..." rows="6" />

        <button className="btn-submit" type="submit"><img src={sendIcon} alt="send"/></button>
      </form>
    )
  }
}

export default Input;
