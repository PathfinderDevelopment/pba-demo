import React from 'react';
import {Typography} from 'antd';
import {
  Container,
  StyledGlucoseLevelContainer,
  StyledBadge,
  StyledCaretUpFilled,
  StyledGlucoseLevel,
  StyledGlucoseLevelLabel,
  StyledLink,
} from './Home.styled';
import {Link} from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <Container>
      <Typography.Title>Blood Glucose</Typography.Title>

      <StyledGlucoseLevelContainer>
        <Link to='alerts'>
          <StyledBadge count={1} style={{backgroundColor: '#41912A'}}>
          </StyledBadge>
        </Link>
        <StyledCaretUpFilled />
        <StyledGlucoseLevel>120</StyledGlucoseLevel>
        <StyledGlucoseLevelLabel>mg/dL</StyledGlucoseLevelLabel>
      </StyledGlucoseLevelContainer>

      <StyledLink to='/report'>View Reports</StyledLink>
      <StyledLink to='/dosage'>Get Dosage</StyledLink>
      <StyledLink to='/calorieinput'>Input Calories</StyledLink>
      <StyledLink to='/feedback'>Give Feedback</StyledLink>
    </Container>);
};
