import React from "react";
import PropTypes from "prop-types";

import "./dropdown.css";
import classNames from "classnames";

/*
Dropdown component
Props:
  items = array, items contained in the dropdown
  onChange = function, will be called when a new item is clicked. Will pass the selected item as a parameter
*/

class Dropdown extends React.Component {
  state = {
    dropdownHovered: false,
    selectedIndex: 0
  };

  onClickHandler = event => {
    const index = event.target.dataset.index;
    const item = this.props.items[index];

    //set the index of the item that was just clicked to be the selected item
    this.setState({
      ...this.state,
      selectedIndex: index
    });

    //call the onChange functions passed in through props
    this.props.onChange(item);
  };

  onSortOver = () => {
    //When mouse is hovering the dropdown
    this.setState({
      ...this.state,
      dropdownHovered: true
    });
  };

  onSortLeave = () => {
    this.setState({
      ...this.state,
      dropdownHovered: false
    });
  };

  render() {
    const { items } = this.props;
    return (
      <div
        className={classNames("sort-buttons_button-container", {
          "sort-buttons_show-hovered-container": this.state.dropdownHovered
        })}
        onMouseOver={this.onSortOver}
        onMouseLeave={this.onSortLeave}
      >
        <button className="sort-buttons_buttons">
          {items[this.state.selectedIndex]}{" "}
          <span
            style={{
              fontSize: ".7em",
              marginTop: "-20px",
              position: "relative",
              top: "-2px"
            }}
          >
            {" "}
            ▼
          </span>
        </button>
        {items.map((item, index) => {
          return (
            <button
              className={classNames(
                "sort-buttons_buttons",
                "sort-buttons_options",
                {
                  "sort-buttons_show-hovered": this.state.dropdownHovered
                },
                { "sort-buttons_hidden": this.state.selectedIndex == index }
              )}
              data-index={index}
              onClick={this.onClickHandler.bind(this)}
              key={`dropdown-item-${index}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
