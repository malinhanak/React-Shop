import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

class Header extends Component {
  render() {
    let CartContent = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const cartStock = CartContent.length;
    return(
      <header>
        <h2>My first Apollo app <span role="img" aria-label="emoji-rocket">🚀</span></h2>
        <Link to={`/ShoppingCart`}><p>Cart: {cartStock}</p></Link>
      </header>
    )
  }
}
export default Header;
