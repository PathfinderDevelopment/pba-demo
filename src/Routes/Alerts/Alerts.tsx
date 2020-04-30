import React, {useEffect} from 'react';
import {Typography} from 'antd';
import {AlertItem} from './AlertItem/AlertItem';
import styled from 'styled-components';
import {useMixpanel} from 'react-mixpanel-browser';
import {useCountly} from '../../Count.ly';

const Header = styled.div`
  margin-left:80%;  
  color:white;
`;

export const Alerts: React.FC = () => {
  const mixpanel = useMixpanel();
  const countly: any = useCountly();

  useEffect(() => {
    mixpanel.track('Viewed Alerts');
    countly.q.push(['add_event', {
      'key': 'Viewed Alerts',
    }]);
  }, [mixpanel, countly]);

  return (
    <div>
      <Typography.Title level={2}>Alerts</Typography.Title>
      <Header>Read?</Header>
      <AlertItem />
      <AlertItem />
    </div>
  );
};
