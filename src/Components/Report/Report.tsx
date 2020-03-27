import React from 'react';
import {Button} from 'antd';
import {Container, StyledBackButton} from '../SharedStyledComponents';
import {Link, useHistory} from 'react-router-dom';

export const Report:React.FC = () => {
  const history = useHistory();
  const shareData = ():void => {
    history.push('/sharedata')
    // TODO: Track data sharing event.
  };

  return (
    <Container style={{height: '500px', width: '25%'}}>
      <Link to='home'>
        <StyledBackButton/>
      </Link>
      <Button type='primary' onClick={shareData}>Share Data</Button>
    </Container>
  );
};
