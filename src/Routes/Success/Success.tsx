import React from 'react';
import {useHistory, useLocation} from 'react-router';
import Checkmark from '../../images/check-mark.png';
import {Typography, Button} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useMixpanel} from 'react-mixpanel-browser';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Success:React.FC = () => {
  const mixpanel = useMixpanel();
  const query = useQuery();
  let messageText = '';
  let hideGoBack = false;

  switch (query.get('of')) {
    case 'share':
      messageText = 'Your data has been shared.';
      mixpanel.track('Shared Report');
      break;
    case 'calorieEntry':
      messageText = 'Your calories have been submitted.';
      mixpanel.track('Inputed Calories');
      break;
    case 'feedback':
      messageText = 'Your feedback has been submitted.';
      mixpanel.track('Completed Feedback form');
      break;
    case 'pairing':
      messageText = 'Your device is paired.';
      mixpanel.track('Paired Device');
      hideGoBack = true;
      break;
    case 'dosage':
      messageText = 'Your Actual Insulin Dosage has been saved';
      mixpanel.track('Input Actual Dosage');
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
    <div>
      <img src={Checkmark} style={{marginBottom: '24px'}} alt='green check'/>
      <Typography.Title level={3}>{messageText}</Typography.Title>
      <ButtonsContainer>
        {hideGoBack ? '' : <Button type='primary' onClick={back}>Back</Button>}
        <Link to='/home'>
          <Button type='primary'>Home</Button>
        </Link>
      </ButtonsContainer>
    </div>
  );
};
