import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          id="search"
          name="search"
          onChange={this.props.handleChange}
        ></input>
        <label htmlFor="stock"> Only show products on stock</label>
        <input type="checkbox" id="stock" name="stock"></input>
      </div>
    );
  }
}
