import React from "react";
import { connect } from "react-redux";
import { postFloater } from "../../../actions/floaterActions";
import { addNotification } from "../../../actions/notificationActions";
import CircularButton from "../../misc/circularButton/CircularButton";
import "./inputField.css";
import sendIcon from "../../../img/icons/paper-plane-solid.svg";
import axios from "axios";

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

  async onSubmit(e) {
    e.preventDefault();

    const currentTime = await axios.get(
      "https://worldtimeapi.org/api/timezone/Etc/GMT"
    );

    //put the values from the fields into a new object
    const newFloater = {
      author: this.state.author,
      content: this.state.content,
      time: currentTime.data.unixtime
    };

    //validation
    if (newFloater.author === "") {
      newFloater.author = "Anonymous";
    }
    if (newFloater.content === "") {
      this.props.addNotification("You must write something!", "warning");
      return;
    }

    //post floater to firebase through action creator
    this.props.postFloater(newFloater);

    //clear the form
    this.setState({ author: "", content: "" });
  }

  toggleForm = () => {
    document.querySelector("#idea-form").classList.toggle("idea-form_hide");
  };

  render() {
    const { author, content } = this.state;
    return (
      <React.Fragment>
        <button className="idea-form_btn-open" onClick={this.toggleForm}>
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </button>

        <div id="idea-form" className="idea-form_hide">
          <CircularButton
            onClick={this.toggleForm}
            className={"idea-form_btn-close"}
          />

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
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { postFloater, addNotification }
)(Input);
