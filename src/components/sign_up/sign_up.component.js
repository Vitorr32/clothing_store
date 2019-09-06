import React, { Component } from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign_up.styles.scss';
import FormInput from '../form_input/form_input.component';
import CustomButton from '../custom_button/custom_button.component';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return alert('Password does not match');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign_up'>
        <h2 className='title'> I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign_up_form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          ></FormInput>

          <FormInput
            type='text'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          ></FormInput>

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          ></FormInput>

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          ></FormInput>

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
