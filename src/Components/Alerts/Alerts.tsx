import React from 'react';
import {Container, StyledBackButton} from '../SharedStyledComponents';
import {Link} from 'react-router-dom';
import {Typography} from 'antd';
import {AlertItem} from './AlertItem/AlertItem';

export const Alerts: React.FC = () => {
  return (
    <Container>
      <Link to='home'>
        <StyledBackButton />
      </Link>
      <Typography.Title level={2}>Alerts</Typography.Title>
      <AlertItem />
      <AlertItem />

    </Container>
  );
};
