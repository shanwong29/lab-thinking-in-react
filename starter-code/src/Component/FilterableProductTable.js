import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar
          search={this.props.search}
          handleChange={this.props.handleChange}
        />
        <ProductTable
          products={this.props.products}
          search={this.props.search}
        />
      </div>
    );
  }
}
