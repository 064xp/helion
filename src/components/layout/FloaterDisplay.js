import React from "react";
import { connect } from "react-redux";
import { getFloaters } from "../../actions/floaterActions";
import Floater from "../floaters/Floater";

class Display extends React.Component {
  componentDidMount() {
    this.props.getFloaters();
  }

  render() {
    const { floaters } = this.props;

    return (
      <div>
        <Floater />
        {/*}
        {floaters.length !== 0 ? (
          floaters.map((floater, index) => (
            <div key={index}>
              <h1>{floater.author}</h1>
              <p style={{ marginBottom: "0" }}>{floater.content}</p>
              <small
                style={{ margin: "0", fontSize: ".8em", color: "#797979" }}
              >
                {floater.date}
              </small>
            </div>
          ))
        ) : (
          <h1>loading...</h1>
        )} {*/}
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
