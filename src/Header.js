import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  render() {

    return(
      <header>
        <h2>My first Apollo app <span role="img" aria-label="emoji-rocket">🚀</span></h2>
      </header>
    )
  }
}
export default Header;
