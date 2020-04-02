import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 25%;
  text-align:center;
  position: relative;

  @media (min-width: 320px){
    width: 50%;   
  }
     
  @media (min-width: 768px){
    width:75%;
  }
     
  @media (min-width: 1024px){
    width:50%;
  }
     
  @media (min-width: 1200px){
     width:25%;
  }
`;

export const StyledCardTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 0px;
  color:white;
`;

export const StyledCardSubtitle = styled.p`
  margin-bottom: 0px;
`;
