import React, { Component } from 'react'
import Navber from '../Navber/Navber';
import axios from 'axios';


class EmployeeLogin extends Component {
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

    axios.post('/users/login', {
      email: user.email,
      password: user.password
    }).then(response => {
      if(response.data === "Email not found") return "Email not found";
      
      sessionStorage.setItem('usertoken', response.data)
      return response.data
    }).then(res => {
      if(res !== "Email not found") {
        sessionStorage.setItem('userData', JSON.stringify(user));
        this.props.history.push('/employee/login/employee_home');
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
        </form>
      </div>
    </div>
    <div class="container__panels">
      <div class="panel panel__left">
        <div class="panel__content withoutReg">
          <h3 class="panel__title">Welcome!</h3>
          <h4 class="panel__paragraph">
           Please Sign in to proceed, If you facing any issue in login, please contact IT help desk.
          </h4>
        </div>
        <img class="panel__image" src="/employeelogin.png" alt="" />
      </div>
    </div>
  </div>
      
      </div>  
    )
  }
}
export default EmployeeLogin;