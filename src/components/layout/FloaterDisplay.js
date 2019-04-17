import React from "react";
import { connect } from "react-redux";
import { getFloaters } from "../../actions/floaterActions";
import Floater from "../floaters/Floater";
import { floaterPositions } from "../floaters/floaterPositions";
import { randomNumFromInterval } from "../helperFunctions";

class Display extends React.Component {
  componentDidMount() {
    this.props.getFloaters();
  }

  render() {
    const { floaters } = this.props;

    return (
      <div>
        {floaters.length !== 0 ? (
          floaters.map((floater, index) => {
            let pos =
              floaterPositions[
                randomNumFromInterval(0, floaterPositions.length - 1)
              ][index];

            return <Floater key={index} message={floater} index={index} position={pos} />;
          })
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  floaters: state.floater.floaters
});

export default connect(
  mapStateToProps,
  { getFloaters }
)(Display);
