import React from 'react';
import {Route} from 'react-router';
import {Home} from './Components/Home/Home';
import {Pairing} from './Components/Pairing/Pairing';
import {InsulinDosage} from './Components/InsulinDosage/InsulinDosage';
import {Feedback} from './Components/Feedback/Feedback';
import {CalorieInput} from './Components/CalorieInput/CalorieInput';
import {Alerts} from './Components/Alerts/Alerts';
import {Login} from './Components/Login/Login';
import {Report} from './Components/Report/Report';
import {EmailShare} from './Components/Report/EmailShare/EmailShare';
import {Success} from './Components/Success/Success';
import Logo from './images/orthogonal-logo-stacked-white-onblack@2x.png';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const InnerContainer = styled.div`
  display:table-cell;
  vertical-align:middle;
  text-align:center;
`;

const StyledContainer = styled.div`
  display: table;
  position: absolute;
  width:100%;
  height:100%;
`;


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledContainer>
        <InnerContainer>
          <img src={Logo} style={{marginBottom: '32px'}} alt='Orthogonal Logo'/>
          <Route exact path='/' component={Login} />
          <Route exact path='/pairdevice' component={Pairing} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/report' component={Report} />
          <Route exact path='/sharedata' component={EmailShare} />
          <Route exact path='/dosage' component={InsulinDosage} />
          <Route exact path='/feedback' component={Feedback} />
          <Route exact path='/calorieinput' component={CalorieInput} />
          <Route exact path='/alerts' component={Alerts} />
          <Route exact path='/success' component={Success} />
        </InnerContainer>
      </StyledContainer>
    </BrowserRouter>
  );
};
