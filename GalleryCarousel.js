import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Img1 from '../photos/facilities1.jpg';
import Img2 from '../photos/facilities2.jpg';
import Img3 from '../photos/facilities3.jpg';
import Img4 from '../photos/facilities4.jpg';
import Img5 from '../photos/facilities5.jpg';
import Img6 from '../photos/facilities6.jpg';
import Img7 from '../photos/gallery1.jpg';
import Img8 from '../photos/gallery2.jpg';
import Img9 from '../photos/gallery3.jpg';
import Img10 from '../photos/gallery4.jpg';
import OurDoctors from './OurDoctors';
import Footer from './Footer';
import HomeQuote from './HomeQuote'


class GalleryCarousel extends Component {
    
    render() { 
        return (
         <div class="gallery">
         <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
          <li data-target="#carousel-example-1z" data-slide-to="3"></li>
          <li data-target="#carousel-example-1z" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="galleryview1">
            </div>
          </div>
          <div class="carousel-item">
            <div class="galleryview2">
            </div>
          </div>
          <div class="carousel-item">
            <div class="galleryview5">
            </div>
          </div>
          <div class="carousel-item">
            <div class="galleryview4">
            </div>
          </div>
          <div class="carousel-item">
            <div class="galleryview3">
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
      <div class="galleryDoctor">
         <OurDoctors/>
         </div>
         <HomeQuote/>
         <Footer/>

        </div> );
    }
}
 
export default GalleryCarousel;