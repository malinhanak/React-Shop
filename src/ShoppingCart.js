import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/Cart.css';
let cartContent = JSON.parse(localStorage.getItem("shoppingCart")) || [];
class ShoppingCart extends Component {
  constructor(){
    super()
    console.log(cartContent)
    this.handleClick = this.handleClick.bind(this);
  }
  handleTotalAmount(amount, newAmount){
    amount = 0;
    let totalAmountArray = [0,];
    let totalSum = 0;
    cartContent.forEach(function(price) {
      return totalAmountArray.push(price.price)
    });
    if(!cartContent){
      return null
    } else {
      return totalSum = totalAmountArray.reduce((total, amount) => total + amount);
    }
  }
  handleClick(){
    console.log('ORDER SENT!')
    localStorage.clear();
    window.location.reload()
  }
  render(){
    const cartStock = cartContent.length;
    let showCart = cartContent.map((cartItem) => {
      if(cartContent.length === []){
        return (
                <p>Cart is empty</p>
          )
      } else {
        return (
            <article className="cart-item" key={cartItem.id}>
              <img src={cartItem.img} alt={cartItem.name}></img>
              <article className="cart-item-detail">
                <h5>Product name</h5>
                <p className="item-name">{cartItem.name}</p>
              </article>
              <p className="item-price"><strong>Price:</strong> ${cartItem.price}</p>
              <Link to={`/${cartItem.slug}`}><FontAwesomeIcon icon="angle-right"  size="4x"/></Link>
            </article>
        )
      }
    });
    return(
      <section className="main-cart">
        <h2>Shopping Cart</h2>
        <section className="cart">
          {showCart}
        </section>
        <section className="footer-cart">
          <section className="cart-details">
            <article className="cart-detail-divider">
              <h5>Cart items</h5>
              <p>{cartStock} st</p>
            </article>
            <article className="cart-detail-divider">
              <h5>Total amount</h5>
              <p>${this.handleTotalAmount()}</p>
            </article>
          </section>
          <section className="cart-checkout">
            <button className="checkout-order" onClick={this.handleClick}>Checkout</button>
          </section>
        </section>
      </section>
    )
  }
}

export default ShoppingCart
