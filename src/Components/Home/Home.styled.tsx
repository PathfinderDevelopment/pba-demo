import styled from 'styled-components';
import {CaretUpFilled} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Badge} from 'antd';

export const Container = styled.div`
  margin: auto;
  width: 25%;
  text-align:center;
`;

export const StyledGlucoseLevelContainer = styled.div`
  position:relative;
  background-color: #2e6891;
  border-radius: 20px;
  color: white;
  width: 100%;
  margin: auto;
  padding: 1.6rem 3.2rem;
`;

export const StyledGlucoseLevel = styled.h1`
  margin-bottom: 0px;
  color:white;
`;

export const StyledGlucoseLevelLabel = styled.p`
  margin-bottom: 0px;
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  left: -3rem;
  top: 0;
  transform: scale(1.5);
`;

export const StyledLink = styled(Link)`
  display:block;
  margin: 1.2rem;
  background-color: #41912A;
  border-radius: 2rem;
  color: white;
  padding: 1.6rem;
  font-size: 2rem;
  text-decoration: none;
  transition: .25s;

  :hover {
    color: white;
    transform: scale(1.1);
    transition: .25s;
  }
`;

export const StyledCaretUpFilled = styled(CaretUpFilled)`
  position: absolute;
  right: -5.5rem;
  color: #256891;
  font-size: 5rem;
`;
