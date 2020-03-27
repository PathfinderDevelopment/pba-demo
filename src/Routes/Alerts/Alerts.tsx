import React from 'react';
import {Typography} from 'antd';
import {AlertItem} from './AlertItem/AlertItem';
import styled from 'styled-components';

const Header = styled.div`
  margin-left:80%;  
  color:white;
`;

export const Alerts: React.FC = () => {
  return (
    <div>
      <Typography.Title level={2}>Alerts</Typography.Title>
      <Header>Read?</Header>
      <AlertItem />
      <AlertItem />

    </div>
  );
};
