import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    console.log(this.props);
    // console.log(
    //   this.props.search[0].toUpperCase() + this.props.search.slice(1)
    // );

    let filteredProducts = this.props.products.filter(el => {
      return el.name.startsWith(
        this.props.search.slice(0, 1).toUpperCase() + this.props.search.slice(1)
      );
    });
    let productsRow = filteredProducts.map((el, index) => {
      return <ProductRow product={el} key={index} />;
    });
    console.log(filteredProducts);

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productsRow}</tbody>
      </table>
    );
  }
}

export default ProductTable;
