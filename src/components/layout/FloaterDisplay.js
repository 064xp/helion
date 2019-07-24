import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFloaters, selectFloater } from "../../actions/floaterActions";
import { setIsMobile } from "../../actions/uiActions";
import Floater from "../floaters/Floater";
import { floaterPositions } from "../floaters/floaterPositions";
import { debounce, convertUnixToDate } from "../../helperFunctions";

class Display extends React.Component {
  componentDidMount() {
    this.props.getFloaters(this.props.sortBy);
    this.checkIfMobile();

    window.addEventListener("resize", debounce(this.checkIfMobile, 200));
  }

  componentDidUpdate(prevProps) {
    const prevSortBy = prevProps.sortBy.toUpperCase();
    const nextSortBy = this.props.sortBy.toUpperCase();

    //if sorting was changed by the user, re-fetch floaters
    if (prevSortBy !== nextSortBy) {
      this.props.getFloaters(this.props.sortBy);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", debounce(this.checkIfMobile, 200));
  }

  checkIfMobile = () => {
    const { setIsMobile } = this.props;

    if (window.innerWidth <= 550) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  render() {
    const { floaters, selectFloater, isMobile } = this.props;

    return (
      <div className="floater-display">
        {floaters.length !== 0 ? (
          floaters.map((floater, index) => {
            let pos = floaterPositions[isMobile ? "mobile" : "desktop"][index];
            const messageWithDate = {
              ...floater,
              date: convertUnixToDate(floater.time).toDateString()
            };

            return (
              <Floater
                key={index}
                message={messageWithDate}
                index={index}
                selectFloater={selectFloater}
                position={pos}
                isMobile={isMobile}
              />
            );
          })
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  floaters: state.floater.floaters,
  sortBy: state.ui.sortBy,
  isMobile: state.ui.isMobile,
  lastVisible: state.floater.lastVisible
});

Display.propTypes = {
  floaters: PropTypes.array,
  sortBy: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  setIsMobile: PropTypes.func.isRequired,
  getFloaters: PropTypes.func.isRequired,
  selectFloater: PropTypes.func.isRequired,
  lastVisible: PropTypes.number
};

export default connect(
  mapStateToProps,
  { getFloaters, selectFloater, setIsMobile }
)(Display);
