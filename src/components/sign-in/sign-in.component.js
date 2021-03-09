import './sign-in.component.styles.scss'

import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword( email, password )
      this.setState({email: '',
    password: ''})
    } catch (error) {
      console.log(error)
    }

    
  }
  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({[name] : value})
  }
  
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            required
          />
          
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
          <CustomButton type="submit" >Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
            </div>
        </form>
      </div>
    );
  }
}
