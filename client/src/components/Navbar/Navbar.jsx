import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, NavItem } from 'react-materialize';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="navbar-fixed">
          <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">CSA</a>
              <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="/home">Home</a></li>
                <li><a href="/classes">Classes</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <ul class="side-nav" id="mobile-demo">
              <li><a href="/home">Home</a></li>
                <li><a href="/classes">Classes</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}


export default Navbar;
