import React from 'react';

import './Auth.styles.scss';
import SignIn from '../../components/sign_in/sign_in.component';
import SignUp from '../../components/sign_up/sign_up.component';

const Login = () => (
  <div className='login'>
    <SignIn />
    <SignUp />
  </div>
);

export default Login;
