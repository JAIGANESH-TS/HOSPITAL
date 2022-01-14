import React, { Component } from 'react'
import Navber from '../Navber/Navber';
import axios from 'axios';
import './login.css'



class PatientLogin extends Component {
 constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  } 

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }


    axios.post('/patient/login', {
      email: user.email,
      password: user.password
    }).then(response => {
      if(response.data === "Email not found") return "Email not found";
      
      sessionStorage.setItem('usertoken', response.data)
      return response.data
    }).then(res => {
      if(res !== "Email not found") {
        sessionStorage.setItem('userData', JSON.stringify(user));
        this.props.history.push('/patient/login/patient_home');
      } 
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="body">
      <Navber/>
      <div class="container login">
    <div class="container__forms">
      <div class="form">
        <form action="" class="form__sign-in"  onSubmit={this.onSubmit}>
          <h2 class="form__title">Sign In</h2>
          <div class="form__input-field">
            <i class="fas fa-user"></i>
            <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />          </div>
          <div class="form__input-field">
            <i class="fas fa-lock"></i>
            <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                 value={this.state.password}
                  onChange={this.onChange}
                />
          </div>
          <input class="form__submit" type="submit" value="Login" />
          <p class="form__social-text">Or Sign in with social platforms</p>
          <div class="form__social-media">
            <a href="#" class="form__social-icons">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="form__social-icons">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="form__social-icons">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="form__social-icons">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
    <div class="container__panels">
      <div class="panel panel__left">
        <div class="panel__content">
          <h3 class="panel__title">New here ?</h3>
          <p class="panel__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque adipisci tempore aliquid?
          </p>
          <button class="btn btn-transparent" id="sign-up-btn">
          <a href="/regPatient">Register Here</a>
          </button>
        </div>
        <img class="panel__image" src="/patientLogin.svg" alt="" />
      </div>
    </div>
  </div>
      </div>  
    )
  }
}
export default PatientLogin;