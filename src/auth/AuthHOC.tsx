import React, {useContext, ReactElement} from 'react';
import {AuthContext} from './Authentication';
import {Redirect} from 'react-router';

export const AuthHOC: React.FC = ({children}) => {
  const {authState} = useContext(AuthContext);

  let content;
  if (authState === '') {
    content = <Redirect to='/' />;
  } else {
    content = children as ReactElement<any>;
  }

  return content;
};

