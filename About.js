import React, { Component } from 'react';
import Navber from '../Navber/Navber';
import { MDBContainer } from 'mdbreact';

import './About.css';
import Homeimage from '../Homeimage';
import Footer from '../Footer';

class About extends Component {
    
    render() { 
        return ( 
            <div>
                <Navber/>
                <Homeimage/>
                <br/>
                
                <br/>
                
                <div class="sm:flex items-center ">
    <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center">
            <img src = "/about.svg" alt="My Happy SVG"/>

            </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-purple-700">Our Clinic</span></h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore voluptatum.</p>
        </div>
    </div>
</div>

            
            <br>
            
            
            </br>
            <Footer/>
        
            </div>
         );
    }
}
 
export default About;