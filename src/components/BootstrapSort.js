import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

class BootstrapSort extends Component {
  render() {
    return(
      <div className="dropdown">
        <div className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort Price
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to={`/sortDESC`} className="dropdown-item">Sort Price Desc</Link>
          <div className="dropdown-divider"></div>
          <Link to={`/sortASC`} className="dropdown-item">Sort Price Asc</Link>
        </div>
      </div>
    )
  }
}

export default BootstrapSort;
