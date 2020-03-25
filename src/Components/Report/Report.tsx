import React from 'react';
import {Button} from 'antd';
import {CaretLeftOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  margin: auto;
  width: 25%;
  text-align:center;
`;

export const Report:React.FC = () => {
  // TODO: Add graph once assets have been uploaded to Zeplin
  const shareData = ():void => {
    // TODO: Track data sharing event.
  };

  return (
    <Container>
      <Link to='home'>
        <CaretLeftOutlined/>
      </Link>
      <Button type='primary' onClick={shareData}>Share Data</Button>
    </Container>
  );
};
