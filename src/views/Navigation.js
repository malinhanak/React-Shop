import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryListing from './CategoryListing';
import BootstrapSort from '../components/BootstrapSort'
import '../css/Navigation.css';

class Navigation extends Component {
  render() {
    return(
      <nav>
        <Link to={`/`}>View all products</Link>
        <BootstrapSort/>
        <CategoryListing/>
      </nav>
    )
  }
}

export default Navigation;
