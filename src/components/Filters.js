import React from 'react';

class Filters extends React.Component {
  handleChange = (event) => {
    this.props.onChangeType(event.target.value);
  }

  handleClick = (event) => {
    this.props.onFindPetsClick();
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChange}>
            <option value='all'>All</option>
            <option value='micropig'>Micropig</option>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
          </select>
        </div>

        <div className="field">
          <button
            className="ui secondary button"
            onClick={this.handleClick}>Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
