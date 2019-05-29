import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./panel.css";

import SelectedMessage from "./SelectedMessage";
import InfoNav from "./InfoNav";

class ControlPanel extends React.Component {
  state = {
    panelShow: false,
    selectedFloater: this.props.selectFloater
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    //if the app just loaded and there's not message selected yet, hide the panel
    const panelShow = nextProps.selectedFloater ? true : false;

    //if a new message is selected, show the panel and update the selected message
    if (nextProps.selectedFloater !== prevState.selectedFloater) {
      return {
        panelShow: panelShow,
        selectedFloater: nextProps.selectedFloater
      };
    }
    return null;
  }

  togglePanel = () => {
    this.setState({
      ...this.state,
      panelShow: !this.state.panelShow
    });
  };

  render() {
    return (
      <div
        className={classNames("control-panel", {
          "control-panel_show": this.state.panelShow
        })}
      >
        <span
          className="control-panel_flap"
          onClick={this.togglePanel.bind(this)}
        />
        <InfoNav />
        <SelectedMessage message={this.state.selectedFloater} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedFloater: state.floater.selectedFloater
});

ControlPanel.propTypes = {
  selectedFloater: PropTypes.object
};

export default connect(
  mapStateToProps,
  null
)(ControlPanel);
