import React from 'react';
import {Container, StyledBackButton} from '../SharedStyledComponents';
import {useHistory, useLocation} from 'react-router';
import Checkmark from '../../images/check-mark.png';
import {Typography, Button} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Success:React.FC = () => {
  const query = useQuery();
  let messageText = '';
  let hideGoBack = false;

  switch (query.get('of')) {
    case 'share':
      messageText = 'Your data has been shared.';
      break;
    case 'calorieEntry':
      messageText = 'Your calories have been submitted.';
      break;
    case 'feedback':
      messageText = 'Your feedback has been submitted.';
      break;
    case 'pairing':
      messageText = 'Your device is paired.';
      hideGoBack = true;
      break;
    case 'dosage':
      messageText = 'Your dosage has been saved';
      break;
    default:
      messageText = 'We\'re not sure what you did.';
      break;
  }


  const history = useHistory();

  const back = () => {
    history.goBack();
  };

  return (
    <Container>
      {hideGoBack ? null :
      <StyledBackButton
        style={{color: '#d8d8d8', cursor: 'pointer'}}
        onClick={back}/>}
      <img src={Checkmark} style={{marginBottom: '24px'}} alt='green checkmark'/>
      <Typography.Title level={3}>{messageText}</Typography.Title>
      <ButtonsContainer>
        {hideGoBack ? '' : <Button type='primary' onClick={back}>Back</Button>}
        <Link to='/home'>
          <Button type='primary'>Home</Button>
        </Link>
      </ButtonsContainer>
    </Container>
  );
};
