import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

class Navigation extends Component {
  // TODO: fix whatever is wrong with asc function.
  render() {

    return(
      <nav>
        <Link to={`/`}>View Products</Link>
        <Link to={`/sortDESC`}>Sort Price Desc</Link>
        <Link to={`/sortASC`}>Sort Price Asc</Link>
        <div className="nav-extra">
          <p>Filter on Category:</p>
          <p>coming soon..</p>
        </div>
      </nav>
    )
  }
}

export default Navigation;
