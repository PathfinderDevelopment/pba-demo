import React from 'react';
import {Container, StyledBackButton} from '../SharedStyledComponents';
import {Link} from 'react-router-dom';
import {Typography} from 'antd';
import {AlertItem} from './AlertItem/AlertItem';
import styled from 'styled-components';

const Header = styled.div`
  margin-left:80%;  
  color:white;
`;

export const Alerts: React.FC = () => {
  return (
    <Container>
      <Link to='home'>
        <StyledBackButton />
      </Link>
      <Typography.Title level={2}>Alerts</Typography.Title>
      <Header>Read?</Header>
      <AlertItem />
      <AlertItem />

    </Container>
  );
};
