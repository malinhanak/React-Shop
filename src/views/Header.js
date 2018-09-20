import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Header.css';

class Header extends Component {
  render() {
    let CartContent = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    let cartStock;
    if(CartContent.length){
      cartStock = CartContent.length;
    } else {
      cartStock = 0;
    }
    return(
      <header>
        <section className="headline">
          <h1>The Cataffair</h1>
          <p>- an über cute store</p>
        </section>
        <Link to={`/ShoppingCart`}>
          <FontAwesomeIcon icon="shopping-cart"  size="1x"/>
          <span>{cartStock}</span>
        </Link>
      </header>
    )
  }
}
export default Header;
