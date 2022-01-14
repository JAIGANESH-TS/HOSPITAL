import React, { Component } from 'react';
import Homeimage from "../Homeimage"
import Navber from '../Navber/Navber';
import './Home.css';

import OurDoctors from '../OurDoctors';
import Footer from '../Footer';
import HomeQuote from '../HomeQuote';
import Mission from '../Mission';
const src = "https://console.dialogflow.com/api-client/demo/embedded/2fa12929-7f1d-489f-b70b-0de90bc89a81"

class Home extends Component {


    render() {
        return (
            <div>
                <Navber />
                <Homeimage />
                <Mission />
                <br>


                </br>
                <div>
                    <div class="services-area section-padding  active" id="services">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                                    <div class="section-header">
                                        <h2>ZIVA</h2>
                                        <p>This is our ZIVA bot, You can clarify your doubts with us </p>

                                    </div>

                                </div>
                                <div class="ziva">
            <iframe
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/2fa12929-7f1d-489f-b70b-0de90bc89a81">
            </iframe>
</div>

                            </div>

                        </div>        </div>

                </div>

                <OurDoctors />

                <br></br>
                <br></br>
                <h1 className="text-white" align="center">News and Achievements</h1>
                <br />
                <br />
                <HomeQuote />
                <br />
                <br />
                <Footer />

            </div>
        );
    }
}

export default Home;