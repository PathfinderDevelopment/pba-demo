import React, {useState} from 'react';
import {
  AlertContainer,
  StyledAlertIcon,
  AlertText,
  StyledCheckBox} from './AlertItem.styled';
import {BellFilled} from '@ant-design/icons';
import {useMixpanel} from 'react-mixpanel-browser';
import {useCountly} from '../../../Count.ly';

interface IAlertItemProps {
  text: string
};

export const AlertItem:React.FC<IAlertItemProps> = ({text}) => {
  const mixpanel = useMixpanel();
  const countly: any = useCountly();
  const [notificationRead, setNotficationRead] = useState<boolean>(false);

  const alertClickHandler = () => {
    setNotficationRead(!notificationRead);
    mixpanel.track('Notification Read');
    countly.q.push(['add_event', {
      'key': 'Notification Read',
    }]);
  };

  return (
    <AlertContainer onClick={alertClickHandler}>
      <StyledAlertIcon>
        <BellFilled />
      </StyledAlertIcon>
      <AlertText>
        {text}
      </AlertText>
      <StyledCheckBox>
        <input type='checkbox' checked={notificationRead}/>
      </StyledCheckBox>
    </AlertContainer>
  );
};

