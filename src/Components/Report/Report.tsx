import React from 'react';
import {Button} from 'antd';
import {Container, StyledBackButton} from '../SharedStyledComponents';
import {Link} from 'react-router-dom';
import ReportImage from '../../images/reports_image.png';

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
      <img src={ReportImage} style={{width: '100%'}} alt='report-graph'/>
      <Button type='primary' onClick={shareData}>Share Data</Button>
    </Container>
  );
};
