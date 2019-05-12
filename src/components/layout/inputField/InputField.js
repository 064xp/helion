import React from "react";
import { connect } from "react-redux";
import { postFloater } from "../../../actions/floaterActions";

import "./inputField.css";
import sendIcon from "../../../img/icons/paper-plane-solid.svg";
import * as hf from "../../../helperFunctions";

// TODO:
// Style form, make responsive

class Input extends React.Component {
  state = {
    author: "",
    content: ""
  };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    //put the values from the fields into a new object
    const newFloater = {
      author: this.state.author,
      content: this.state.content,
      time: Date.now(),
      date: hf.getDate()
    };

    console.log(newFloater);

    //validation
    if (newFloater.author === "") {
      newFloater.author = "Anonymous";
    }
    if (newFloater.content === "") {
      alert("You must write something!");
      return;
    }

    //post floater to firebase through action creator
    this.props.postFloater(newFloater);

    //clear the form
    this.setState({ author: "", content: "" });
  };

  hideForm = () => {
    document.querySelector("#idea-form").classList.toggle("idea-form_hide");
  };

  render() {
    const { author, content } = this.state;
    return (
      <div id="idea-form" className="idea-form_hide">
        <button onClick={this.hideForm} id="idea-form_btn-close">
          X
        </button>
        <form action="#" onSubmit={this.onSubmit.bind(this)}>
          <h2>Share your thoughts with the universe...</h2>
          <input
            type="text"
            id="form-author"
            placeholder="Who are you?"
            autoComplete="off"
            name="author"
            value={author}
            onChange={this.onChangeHandler.bind(this)}
          />
          <textarea
            type="text"
            id="form-content"
            placeholder="Share your thoughts..."
            rows="6"
            name="content"
            value={content}
            onChange={this.onChangeHandler.bind(this)}
          />

          <button className="idea-form_btn-submit" type="submit">
            <img src={sendIcon} alt="send" />
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { postFloater }
)(Input);
