import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class HomeQuote extends Component {
    
    render() { 
        return ( 
          <div class="awardlist">
          <h1 class="title mt-5 mb-5">Our Awards</h1>

          <div class="container">
            <div class="row">
              
              <div class="col-sm-6 col-md-5 offset-md-1 col-lg-4 offset-lg-0 col-xl-3 offset-xl-0 mb-5">
              <div class="card-centered"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam scelerisque molestie. Pellentesque congue ornare elementum.</p></div>
                <div class="card shine-overlay">
                  <div class="card-bg card-bg1"></div>
                <div class="shine"></div>
                </div>
              </div>
              
              <div class="col-sm-6 col-md-5 offset-md-1 col-lg-4 offset-lg-0 col-xl-3 offset-xl-0 mb-5">
              <div class="card-centered"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam scelerisque molestie. Pellentesque congue ornare elementum.</p></div>
                <div class="card shine-overlay">
                  <div class="card-bg card-bg2" ></div>
                  <div class="shine"></div>
                </div>
              </div>
              
              <div class="col-sm-6 col-md-5 offset-md-1 col-lg-4 offset-lg-0 col-xl-3 offset-xl-0 mb-5">
              <div class="card-centered"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam scelerisque molestie. Pellentesque congue ornare elementum.</p></div>
                <div class="card shine-overlay">
                  <div class="card-bg card-bg3"></div>
                  <div class="shine"></div>
                </div>
              </div>
              
              <div class="col-sm-6 col-md-5 offset-md-1 col-lg-4 offset-lg-0 col-xl-3 offset-xl-0 mb-5">
              <div class="card-centered"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam scelerisque molestie. Pellentesque congue ornare elementum.</p></div>
                <div class="card shine-overlay">
                  <div class="card-bg card-bg4 card-bg--alt"></div>
                <div class="shine"></div>
                </div>
              </div>
              
            </div>
          </div>
          
            </div>
         );
    }
}
 
export default HomeQuote;