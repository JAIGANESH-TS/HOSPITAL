import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Img1 from '../photos/doctor4.jpg'
import Img2 from '../photos/doctor2.jpg'
import Img3 from '../photos/doctor6.jpg'

class OurDoctors extends Component {
    
    render() { 
        return ( 
          <div class="doctorlist">
                           <h1 className="head text-white" align="center"> Our Top Specialist </h1>
                           <hr className='text-white' align="center"></hr>
                <br></br>
          <div class="landing">
 
        <div class="container">
          <div class="card">
            <div class="top-section">
              <img
                src="https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div class="name">
                <span>Tao</span>
                <br />
                <span>Yang</span>
              </div>
            </div>
            <div class="info-section">
              <h2>
                About
                <div></div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi
                vitae facere atque reiciendis consequuntur corrupti magnam
                officiis quos nobis!
              </p>
              <h2>
                contact
                <div></div>
              </h2>
              <div class="social">
                <a href="" class="fab fa-facebook-square"></a>
                <a href="" class="fab fa-twitter"></a>
                <a href="" class="fab fa-instagram"></a>
                <a href="" class="fab fa-youtube"></a>
                <a href="" class="fab fa-codepen"></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="top-section">
              <img
                src="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div class="name">
                <span>Dean</span>
                <br />
                <span>Stanley</span>
              </div>
            </div>
            <div class="info-section">
              <h2>
                About
                <div></div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi
                vitae facere atque reiciendis consequuntur corrupti magnam
                officiis quos nobis!
              </p>
              <h2>
                contact
                <div></div>
              </h2>
              <div class="social">
                <a href="" class="fab fa-facebook-square"></a>
                <a href="" class="fab fa-twitter"></a>
                <a href="" class="fab fa-instagram"></a>
                <a href="" class="fab fa-youtube"></a>
                <a href="" class="fab fa-codepen"></a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="top-section">
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div class="name">
                <span>Kelly</span>
                <br />
                <span>Howard</span>
              </div>
            </div>
            <div class="info-section">
              <h2>
                About
                <div></div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi
                vitae facere atque reiciendis consequuntur corrupti magnam
                officiis quos nobis!
              </p>
              <h2>
                contact
                <div></div>
              </h2>
              <div class="social">
                <a href="" class="fab fa-facebook-square"></a>
                <a href="" class="fab fa-twitter"></a>
                <a href="" class="fab fa-instagram"></a>
                <a href="" class="fab fa-youtube"></a>
                <a href="" class="fab fa-codepen"></a>
              </div>
            </div>
          </div>
        </div>
      </div></div> );
    }
}
 
export default OurDoctors;