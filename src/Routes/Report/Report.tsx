import React from 'react';
import {Button} from 'antd';
import {useHistory} from 'react-router-dom';

export const Report:React.FC = () => {
  const history = useHistory();
  const shareData = ():void => {
    history.push('/sharedata');
    // TODO: Track data sharing event.
  };

  return (
    <div style={{height: '500px', width: '25%'}}>
      <Button type='primary' onClick={shareData}>Share Data</Button>
    </div>
  );
};
