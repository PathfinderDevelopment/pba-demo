import React, {useState} from 'react';
import styled from 'styled-components';
import {AlertIcon} from './AlertIcon';

const AlertContainer = styled.div`
  width:100%;
  display: flex;
  border-bottom: 1px solid white;
  padding: 16px 0px;
`;

const StyledAlertIcon = styled(AlertIcon)`
  width:20%;
  color: ${(props) => props.notificationState ? 'white' : 'red'};
  cursor:pointer;
`;

const AlertText = styled.div`
  width:80%;
  color:white;
`;

export const AlertItem = () => {
  const [notificationRead, setNotficationRead] = useState(false);

  const alertClickHandler = () => {
    setNotficationRead(true);
    // TODO: Track alert read event here.
  };

  return (
    <AlertContainer onClick={alertClickHandler}>
      <StyledAlertIcon
        notificationState={notificationRead}>
      </StyledAlertIcon>
      <AlertText>
        Your blood glucose reading at 8:34am
        on 4-19-20 indicates a LOW blood glucose level.
      </AlertText>
    </AlertContainer>
  );
};

