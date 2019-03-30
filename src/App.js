import React, { Component } from 'react';
import firebase from './Firebase';
import './App.css';

import InputField from './components/layout/InputField';


var db = firebase.firestore();

class App extends Component {

  state = {
    floaters: []
  }

  componentDidMount(){
    //get all the documents in the 'floaters' collection
    let floaters = db.collection('floaters');
    floaters.get().then(querySnapshot => {
      //for each, push it to the floaters array in the state
      querySnapshot.forEach(doc => {
        this.setState({
          //call the data() function on the documents returned to retrieve the data
          floaters: [...this.state.floaters, doc.data()]
        });
      });
    });
  }

  render() {
    const { floaters } = this.state;

    return (
      <div className="App">
        {floaters.map(floater =>
          <div>
            <h1>{floater.author}</h1>
            <p>{floater.content}</p>
          </div>
        )}
        <InputField />
      </div>

    );
  }
}

export default App;
