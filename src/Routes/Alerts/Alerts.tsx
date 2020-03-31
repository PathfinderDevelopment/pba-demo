import React, {useEffect} from 'react';
import {Typography} from 'antd';
import {AlertItem} from './AlertItem/AlertItem';
import styled from 'styled-components';
import {useMixpanel} from 'react-mixpanel-browser';

const Header = styled.div`
  margin-left:80%;  
  color:white;
`;

export const Alerts: React.FC = () => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('Page View', {pageName: 'Alerts'});
  }, [mixpanel]);

  return (
    <div>
      <Typography.Title level={2}>Alerts</Typography.Title>
      <Header>Read?</Header>
      <AlertItem />
      <AlertItem />
    </div>
  );
};
