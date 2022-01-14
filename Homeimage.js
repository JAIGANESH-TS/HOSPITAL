import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { MDBContainer } from 'mdbreact';
import Img from '../photos/hospital.jpg'

class Homeimage extends Component {
   
    render() { 
        return (
        
        <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="view1">
              <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
                <div class="text-center white-text mx-5 wow fadeIn">
                  <h1 class="mb-4">
                    <strong>Learn Bootstrap 4 with MDB</strong>
                  </h1>
  
                  <p>
                    <strong>Best & free guide of responsive web design</strong>
                  </p>
  
                  <p class="mb-4 d-none d-md-block">
                    <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                      written versions
                      available. Create your own, stunning website.</strong>
                  </p>
  
                  <a target="_blank" href="/regPatient" class="btn btn-outline-white btn-lg">Register
                    
                  </a>
                </div>
  
              </div>
  
            </div>
          </div>
          <div class="carousel-item">
            <div class="view2">
              <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
  
                <div class="text-center white-text mx-5 wow fadeIn">
                  <h1 class="mb-4">
                    <strong>Learn Bootstrap 4 with MDB</strong>
                  </h1>
  
                  <p>
                    <strong>Best & free guide of responsive web design</strong>
                  </p>
  
                  <p class="mb-4 d-none d-md-block">
                    <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                      written versions
                      available. Create your own, stunning website.</strong>
                  </p>
  
                  <a target="_blank" href="/regPatient" class="btn btn-outline-white btn-lg">Register
                    
                  </a>
                </div>
  
              </div>
  
            </div>
          </div>
          <div class="carousel-item">
            <div class="view3">
  
              <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
  
                <div class="text-center white-text mx-5 wow fadeIn">
                  <h1 class="mb-4">
                    <strong>Learn Bootstrap 4 with MDB</strong>
                  </h1>
  
                  <p>
                    <strong>Best & free guide of responsive web design</strong>
                  </p>
  
                  <p class="mb-4 d-none d-md-block">
                    <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
                      written versions
                      available. Create your own, stunning website.</strong>
                  </p>
  
                  <a target="_blank" href="/regPatient" class="btn btn-outline-white btn-lg">Register
                    
                  </a>
                </div>
  
              </div>
  
            </div>
          </div>
  
        </div>

        <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        
        );
    }
}
 
export default Homeimage;