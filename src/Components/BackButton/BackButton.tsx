import React from 'react';
import {useHistory} from 'react-router';
import styled from 'styled-components';
import {CaretLeftOutlined} from '@ant-design/icons';


const StyledBackButton = styled(CaretLeftOutlined)`
    position: absolute;
    left: -2.5rem;
    top: .75rem;
    font-size:2.5rem;
`;

const BackButtonContainer = styled.div`
color: #d8d8d8;
position: absolute;
cursor: pointer;
`;

export const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };


  return (
    <BackButtonContainer onClick={goBack}>
      <StyledBackButton />
    </BackButtonContainer>
  );
};
