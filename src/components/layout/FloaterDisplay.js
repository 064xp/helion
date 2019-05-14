import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFloaters, selectFloater } from "../../actions/floaterActions";
import Floater from "../floaters/Floater";
import { floaterPositions } from "../floaters/floaterPositions";
import { randomNumFromInterval } from "../../helperFunctions";

class Display extends React.Component {
  async componentDidMount() {
    this.props.getFloaters(this.props.sortBy);
  }

  render() {
    const { floaters, selectFloater } = this.props;

    return (
      <div>
        {floaters.length !== 0 ? (
          floaters.map((floater, index) => {
            let pos =
              floaterPositions[
                randomNumFromInterval(0, floaterPositions.length - 1)
              ][index];

            return (
              <Floater
                key={index}
                message={floater}
                index={index}
                selectFloater={selectFloater}
                position={pos}
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
  isMobile: state.ui.isMobile
});

Display.propTypes = {
  floaters: PropTypes.array,
  sortBy: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  getFloaters: PropTypes.func.isRequired,
  selectFloater: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getFloaters, selectFloater }
)(Display);
