import React, { Component } from "react";
import { Table, Button } from "reactstrap";
class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Uniit Price</th>
            <th>Uniit in Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            //her bir cardItem için tboyd içine tr ekle
            this.props.cart.map((cartItem) => (
              //key
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}></td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
export default CartList;
