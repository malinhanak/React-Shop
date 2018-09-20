import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';
import CategoryListing from './CategoryListing';

class Navigation extends Component {
  constructor(){
    super()
    this.state = {
      sortDrop: false,
      filterDrop: false
    }
    this.handleSortDrop = this.handleSortDrop.bind(this);
  }
  handleSortDrop(){
    this.state.sortDrop = !this.state.sortDrop;
    console.log('Drop: ', this.state.sortDrop)
  }
  render() {
    return(
      <nav>
        <div onClick={this.handleSortDrop}>dropper</div>
        <Link to={`/`}>View all products</Link>
        <Link to={`/sortDESC`}>Sort Price Desc</Link>
        <Link to={`/sortASC`}>Sort Price Asc</Link>
        <CategoryListing/>
      </nav>
    )
  }
}

export default Navigation;
