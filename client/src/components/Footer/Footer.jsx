import React from "react";
import {Footer} from 'react-materialize';
import styles from './Footer.css';


const MyFooter = () =>  
  <Footer copyrights="© 2018 Creative Studios of Atlanta"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
    }
    links={
      <ul>
        {/* <p>Site Map</p>         */}
        <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
        <li><a className="grey-text text-lighten-3" href="/photos">Photos</a></li>
        <li><a className="grey-text text-lighten-3" href="/blog">Blog</a></li>
        <li><a className="grey-text text-lighten-3" href="/about">About</a></li>
        <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>        
      </ul>
    }
    className='example'
  >
		<h5 className="white-text">Creative Studios of Atlanta</h5>
		<p className="grey-text text-lighten-4">“It takes teamwork to make a dream work”</p>
</Footer>;

export default MyFooter;