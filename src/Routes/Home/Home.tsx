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
import {useCountly} from '../../Count.ly';

type HomeProps = {
  glucoseLevel: number
}

export const Home: React.FC<HomeProps> = ({glucoseLevel}) => {
  const mixpanel: any = useMixpanel();
  const countly: any = useCountly();

  useEffect(() => {
    console.log(glucoseLevel);
    mixpanel.track('Viewed Blood Glucose Level', {
      'currentGlucoseReading': glucoseLevel,
    });
    mixpanel.register({
      'lastReadGlucoseLevel': glucoseLevel,
    });
    countly.q.push(['add_event', {
      'key': 'Viewed Blood Glucose Level',
    }]);
  }, [mixpanel, countly, glucoseLevel]);

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
        <StyledCardTitle>{glucoseLevel}</StyledCardTitle>
        <StyledCardSubtitle>mg/dL</StyledCardSubtitle>
      </StyledGlucoseLevelContainer>

      <StyledLink to='/report'>View Reports</StyledLink>
      <StyledLink to='/dosage'>Get Dosage</StyledLink>
      <StyledLink to='/calorieinput'>Input Calories</StyledLink>
      <StyledLink to='/feedback'>Give Feedback</StyledLink>
    </Fragment>);
};
