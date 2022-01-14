import React, { Component } from 'react';

class Footer extends Component {
    
    render() { 
        return (   
          
          <footer>
          <div class="top_header">
          <section>
          <span><i class="fa fa-map-marker"></i></span>
          <span>RSM Nagar, Gummidipoondi, Taluk, Kavaraipettai, Tamil Nadu 601206</span>
          </section>
          <section>
          <span><i class="fa fa-phone"></i></span>
          <span>1800 2525 3636</span>
          </section>
          <section>
          <span><i class="fa fa-envelope"></i></span>
          <span>www.rmk.ac.in</span>
          </section>
          </div>
          <span class="border-shape"></span>
          <div class="bottom_content">
          <section>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-telegram"></i></a>
          </section>
          <section>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/gallery">Gallery</a>
          <a href="/regPatient">Register</a>
          <a href="/contact">Contact Us</a>
          </section>
          </div>
          <div class="copyright">
          Copyright © 2021 ZIVA - All rights reserved 
          </div>
          </footer>);
    }
}
 
export default Footer;