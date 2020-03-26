import styled from 'styled-components';
import {CaretUpFilled} from '@ant-design/icons';
import {Link} from 'react-router-dom';

export const StyledGlucoseLevelContainer = styled.div`
  position:relative;
  background-color: #2e6891;
  border-radius: 20px;
  color: white;
  width: 100%;
  margin: auto;
  padding: 1.6rem 3.2rem;
`;

export const AlertNotification = styled.div`
  position: absolute;
  left: -4rem;
  top: 0;
  background-color: #41912A;
  transform: scale(1.5);
  color: white;
  border-radius:200px;
  width: 2.4rem;
  height: 2.4rem;
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
