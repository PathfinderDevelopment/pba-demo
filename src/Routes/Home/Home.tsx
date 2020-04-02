import React, {Fragment, useEffect} from 'react';
import {Typography} from 'antd';
import {
  StyledGlucoseLevelContainer,
  AlertNotification,
  StyledCaretUpFilled,
  StyledLink,
} from './Home.styled';
import {
  StyledCardTitle,
  StyledCardSubtitle} from '../../Components/SharedStyledComponents';
import {Link} from 'react-router-dom';
import {BellFilled} from '@ant-design/icons';
import {useMixpanel} from 'react-mixpanel-browser';

export const Home: React.FC = () => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('Viewed Homepage/Blood Glucose Level');
  }, [mixpanel]);

  return (
    <Fragment>
      <Typography.Title>Blood Glucose</Typography.Title>

      <StyledGlucoseLevelContainer>
        <Link to='alerts'>
          <AlertNotification style={{backgroundColor: '#41912A'}}>
            <BellFilled/>
          </AlertNotification>
        </Link>
        <StyledCaretUpFilled />
        <StyledCardTitle>120</StyledCardTitle>
        <StyledCardSubtitle>mg/dL</StyledCardSubtitle>
      </StyledGlucoseLevelContainer>

      <StyledLink to='/report'>View Reports</StyledLink>
      <StyledLink to='/dosage'>Get Dosage</StyledLink>
      <StyledLink to='/calorieinput'>Input Calories</StyledLink>
      <StyledLink to='/feedback'>Give Feedback</StyledLink>
    </Fragment>);
};
