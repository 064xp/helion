import React from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import ArrowButtons from "./ArrowButtons";
import { connect } from "react-redux";
import { setSortBy } from "../../../actions/uiActions";
import { getFloaters } from "../../../actions/floaterActions";
import "./style.css";

class SortButtons extends React.Component {
  state = {
    currentPage: 1,
    queuedPageChange: null
  };

  componentDidUpdate(prevProps) {
    if (this.props.firstVisible !== prevProps.firstVisible) {
      this.changePage(this.state.queuedPageChange);
      //clear the queued operation
      this.setState({
        queuedPageChange: null
      });
    }
  }

  onDropdownChange = option => {
    this.props.setSortBy(option);
    this.setState({
      currentPage: 1
    });
  };

  onArrowClick = buttonClicked => {
    const { getFloaters, sortBy, lastVisible, firstVisible } = this.props;
    const { currentPage } = this.state;

    switch (buttonClicked) {
      case "PREVIOUS":
        if (currentPage === 1) {
          return;
        }
        // prettier-ignore
        const oppositeSortBy = sortBy.toUpperCase() === "NEWEST" ? "OLDEST" : "NEWEST";
        //fetch floaters, sort by the opposite of current value; start after first visible floater; reverse the array after fetching and before dispatching
        getFloaters(oppositeSortBy, firstVisible, true);
        //queue a previous page change
        this.queuePageChange(buttonClicked);
        break;

      case "NEXT":
        getFloaters(sortBy, lastVisible, false);
        //queue a next page change
        this.queuePageChange(buttonClicked);
        break;
      default:
        return;
    }
  };

  queuePageChange(operation) {
    this.setState({
      ...this.state,
      queuedPageChange: operation
    });
  }

  changePage = operation => {
    if (operation === null) {
      return;
    }

    const { currentPage } = this.state;
    this.setState({
      ...this.state,
      currentPage: operation === "NEXT" ? currentPage + 1 : currentPage - 1
    });
  };

  render() {
    return (
      <div className="sort-buttons_container">
        <Dropdown
          items={["Newest", "Oldest"]}
          onChange={this.onDropdownChange}
          isMobile={this.props.isMobile}
        />
        <ArrowButtons
          currentPage={this.state.currentPage}
          onArrowClick={this.onArrowClick}
        />
      </div>
    );
  }
}

SortButtons.propTypes = {
  setSortBy: PropTypes.func.isRequired,
  getFloaters: PropTypes.func.isRequired,
  firstVisible: PropTypes.number,
  lastVisible: PropTypes.number,
  sortBy: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  firstVisible: state.floater.firstVisible,
  lastVisible: state.floater.lastVisible,
  sortBy: state.ui.sortBy,
  isMobile: state.ui.isMobile
});

export default connect(
  mapStateToProps,
  { setSortBy, getFloaters }
)(SortButtons);
