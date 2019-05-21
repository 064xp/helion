import React from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import { sortBy } from "../../../actions/uiActions";
import "./style.css";

class SortButtons extends React.Component {
  onDropdownChange = item => {
    this.props.sortBy(item);
  };

  render() {
    return (
      <div>
        <Dropdown
          items={["Newest", "Oldest"]}
          onChange={this.onDropdownChange}
        />
      </div>
    );
  }
}

SortButtons.propTypes = {
  sortBy: PropTypes.func.isRequired
};

export default connect(
  null,
  { sortBy }
)(SortButtons);
