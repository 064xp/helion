import React from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import ArrowButtons from "./ArrowButtons";
import { connect } from "react-redux";
import { setSortBy, setCurrentPage } from "../../../actions/uiActions";
import { getFloaters } from "../../../actions/floaterActions";
import "./style.css";

class SortButtons extends React.Component {
  onDropdownChange = item => {
    this.props.setSortBy(item);
  };

  onArrowClick = buttonClicked => {
    const {
      currentPage,
      getFloaters,
      setCurrentPage,
      sortBy,
      lastVisible,
      firstVisible
    } = this.props;

    switch (buttonClicked) {
      case "PREVIOUS":
        if (currentPage === 1) {
          return;
        }

        //get the opposite of the 'sort by' value
        // prettier-ignore
        const oppositeSortBy = sortBy.toUpperCase() === "NEWEST" ? "OLDEST" : "NEWEST";

        //fetch floaters, sort by the opposite of current value
        //start after first visible floater
        //reverse the array after fetching and before dispatching
        getFloaters(oppositeSortBy, firstVisible, true);
        //decrement page counter
        setCurrentPage(currentPage - 1);
        break;

      case "NEXT":
        //fetch floaters, start after last visible floater
        getFloaters(sortBy, lastVisible);
        //increment page counter
        setCurrentPage(currentPage + 1);
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="sort-buttons_container">
        <Dropdown
          items={["Newest", "Oldest"]}
          onChange={this.onDropdownChange}
        />
        <ArrowButtons
          currentPage={this.props.currentPage}
          onArrowClick={this.onArrowClick}
        />
      </div>
    );
  }
}

SortButtons.propTypes = {
  setSortBy: PropTypes.func.isRequired,
  getFloaters: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  firstVisible: PropTypes.number,
  lastVisible: PropTypes.number,
  sortBy: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  floaters: state.floater.floaters,
  currentPage: state.ui.currentPage,
  firstVisible: state.floater.firstVisible,
  lastVisible: state.floater.lastVisible,
  sortBy: state.ui.sortBy
});

export default connect(
  mapStateToProps,
  { setSortBy, getFloaters, setCurrentPage }
)(SortButtons);
