import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';
import CategoryListing from './CategoryListing';

class Navigation extends Component {
  render() {

    return(
      <nav>
        <Link to={`/`}>View Products</Link>
        <Link to={`/sortDESC`}>Sort Price Desc</Link>
        <Link to={`/sortASC`}>Sort Price Asc</Link>
        <CategoryListing/>
      </nav>
    )
  }
}

export default Navigation;
