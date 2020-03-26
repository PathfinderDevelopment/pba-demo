import React from 'react';
import {BellFilled} from '@ant-design/icons';

type AlertIconProps = {
  className?: string,
  notificationState: boolean
};

export const AlertIcon:React.FC<AlertIconProps> = (props) => {
  return (
    <div className={props.className}>
      <BellFilled />
    </div>);
};
