import React, {useState} from 'react';
import {
  AlertContainer,
  StyledAlertIcon,
  AlertText,
  StyledCheckBox} from './AlertItem.styled';
import {BellFilled} from '@ant-design/icons';


export const AlertItem = () => {
  const [notificationRead, setNotficationRead] = useState<boolean>(false);

  const alertClickHandler = () => {
    setNotficationRead(!notificationRead);
    // TODO: Track alert read event here.
  };

  return (
    <AlertContainer onClick={alertClickHandler}>
      <StyledAlertIcon>
        <BellFilled />
      </StyledAlertIcon>
      <AlertText>
        Your blood glucose reading at 8:34am
        on 4-19-20 indicates a LOW blood glucose level.
      </AlertText>
      <StyledCheckBox>
        <input type='checkbox' checked={notificationRead}/>
      </StyledCheckBox>
    </AlertContainer>
  );
};
