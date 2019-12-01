import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from '../src/Component/FilterableProductTable.js';
import data from './data.json';

export default class App extends Component {
  state = {
    search: ''
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    let productsArr = data.data;
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable
          products={productsArr}
          search={this.state.search}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
