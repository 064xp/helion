import React from "react";
import PropTypes from "prop-types";
import { capsule } from "../../img/floaters/capsule_fire";
import "./floater.css";
import MessagePreview from "./MessagePreview";

class Floater extends React.Component {
  state = {
    showPreview: false
  };

  componentDidMount() {
    const floater = document.querySelector(`#capsule-${this.props.index}`);

    //opacity is set to 0 at the start, when the animation starts
    //(the delay is over), set it back to 1
    floater.addEventListener("animationstart", () => {
      floater.style.opacity = "1";
    });

    //animation end listener to stop the enter animation
    //and start the bobbing animation
    floater.addEventListener("animationend", () => {
      //prettier-ignore
      const fire = floater.childNodes[1].childNodes[1].childNodes[0].childNodes[0];
      floater.classList.remove("capsule-enter");
      floater.classList.remove(`delay-${this.props.index}`);
      floater.classList.add("bobbing");
      fire.style.opacity = "0";
    });
  }

  toggleMessagePreview = hovering => {
    this.setState({
      ...this.state,
      showPreview: hovering ? true : false
    });
  };

  onClick() {
    if (this.props.isMobile) {
      this.onMobileClick();
      return;
    }

    this.props.selectFloater({
      ...this.props.message
    });
  }

  onMobileClick = () => {
    //if the preview is already being shown and the user taps again, select floater and open in panel
    if (this.state.showPreview) {
      this.props.selectFloater(this.props.message);
      this.setState({
        ...this.state,
        showPreview: false
      });
    } else {
      this.setState({
        ...this.state,
        showPreview: true
      });
    }
  };

  render() {
    const { index, position, message, isMobile } = this.props;
    return (
      <div
        id={`capsule-${index}`}
        className={`floater-capsule capsule-enter delay-${index}`}
        style={{ ...position.capsule }}
      >
        <MessagePreview
          show={this.state.showPreview}
          message={message}
          isMobile={isMobile}
          style={position.preview}
        />
        <svg
          onClick={this.onClick.bind(this)}
          onMouseEnter={
            isMobile ? null : this.toggleMessagePreview.bind(this, true)
          }
          onMouseLeave={this.toggleMessagePreview.bind(this, false)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 819.2 799.3"
          dangerouslySetInnerHTML={{ __html: capsule }}
        />
      </div>
    );
  }
}

Floater.propTypes = {
  index: PropTypes.number.isRequired,
  position: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  selectFloater: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default Floater;
