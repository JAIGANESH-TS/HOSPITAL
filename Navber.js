import React, { Component } from 'react';
import classnames from 'classnames'
import './Navber.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import WOW from 'wowjs';


class Navber extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

    render() { 
        return (

          <div>
              <Navbar className={classnames("navbar fixed-top navbar-expand-lg navbar-dark ", {
            "navbar--hidden": !this.state.visible
          })}>
    <div class="container">
      <Navbar.Brand class="navbar-brand" style={{color:"white"}}><strong>RMK</strong></Navbar.Brand>
      <Navbar.Toggle class="navbar-toggler" aria-controls="basic-navbar-nav"><span class="navbar-toggler-icon"></span></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" class="collapse navbar-collapse">

        <Nav className="navbar-nav mr-auto">
            <Nav.Link className="nav-item" href="/"><a class="nav-link">Home</a></Nav.Link>
            <Nav.Link className="nav-item" href="/about"><a class="nav-link">About</a></Nav.Link>                    
            <Nav.Link className="nav-item" href="/gallery"><a class="nav-link">Gallery</a></Nav.Link>
            <Nav.Link className="nav-item" href="/regPatient"><a class="nav-link">Patient Register</a></Nav.Link>
            <Nav.Link className="nav-item" href="https://covid-tracker-dojo.web.app/"><a class="nav-link">COVID CASES</a></Nav.Link>
        </Nav>
        <Nav class="navbar-nav nav-flex-icons navbar-dropdown">
        <a class="loginbtn" href="#">Login</a>
          <div class="dropdown">
          <Nav.Link class="loginlink" href="/patient/login"><a >Patient Login</a></Nav.Link>
          <Nav.Link class="loginlink" href="/doctors/login"><a >Doctor Login</a></Nav.Link>
          <Nav.Link class="loginlink" href="/employee/login"><a >Employee Login</a></Nav.Link>
          <Nav.Link class="loginlink" href="/administrator/login"><a >Admin Login</a></Nav.Link>
          </div>
        </Nav>
    </Navbar.Collapse>
    </div>
    </Navbar>
    </div>
        );
    }
}
 
export default Navber;