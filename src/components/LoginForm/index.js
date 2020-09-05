import React from 'react';

import * as auth from '../../utils/auth';
import { FaSpotify } from 'react-icons/fa';

import { LoginFormWrapper } from './styles';

const LoginForm = () => {
  return (
    <>
      <LoginFormWrapper>
        <FaSpotify color={'#1DB954'} />
        <a href={auth.loginUrl()} className="loginBtn">Login com Spotfy</a>
      </LoginFormWrapper>
    </>
  )
}

export default LoginForm;