import React from 'react';
import {Button} from 'antd';
import {Container, StyledBackButton} from '../SharedStyledComponents';
import {Link} from 'react-router-dom';

export const Report:React.FC = () => {
  // TODO: Add graph once assets have been uploaded to Zeplin
  const shareData = ():void => {
    // TODO: Track data sharing event.
  };

  return (
    <Container>
      <Link to='home'>
        <StyledBackButton/>
      </Link>
      <Button type='primary' onClick={shareData}>Share Data</Button>
    </Container>
  );
};
