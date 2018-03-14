import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, NavItem } from 'react-materialize';
// import { Sticky } from '../Sticky/Sticky';
import './Navbar.css'

class Navbar extends Component {
  // state = {
  //   auth: false,
  //   slide: 0,  // How much should the Navbar slide up or down
  //   lastScrollY: 0,  // Keep track of current position in state
  // };

  // componentWillMount() {
  //   // When this component mounts, begin listening for scroll changes
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   // If this component is unmounted, stop listening
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = () => {
  //   const { lastScrollY } = this.state; 
  //   const currentScrollY = window.scrollY;


  //   if (currentScrollY > lastScrollY) {
  //     this.setState({ slide: '-48px' });
  //   } else {
  //     this.setState({ slide: '0px' });
  //   }
  //   this.setState({ lastScrollY: currentScrollY });
  // };
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">CSA</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/home">Home</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
            <li><a href="/home">Home</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      
    )
  }
}


export default Navbar;
