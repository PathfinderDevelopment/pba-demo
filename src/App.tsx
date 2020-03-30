import React from 'react';
import {Route} from 'react-router';
import {Home} from './Routes/Home/Home';
import {Pairing} from './Routes/Pairing/Pairing';
import {InsulinDosage} from './Routes/InsulinDosage/InsulinDosage';
import {Feedback} from './Routes/Feedback/Feedback';
import {CalorieInput} from './Routes/CalorieInput/CalorieInput';
import {Alerts} from './Routes/Alerts/Alerts';
import {Login} from './Routes/Login/Login';
import {Report} from './Routes/Report/Report';
import {EmailShare} from './Routes/Report/EmailShare/EmailShare';
import {Success} from './Routes/Success/Success';
import {NavMenu} from './Components/NavMenu/NavMenu';
import Logo from './images/orthogonal-logo-stacked-white-onblack@2x.png';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import {Container} from './Components/SharedStyledComponents';
import {BackButton} from './Components/BackButton/BackButton';
import {MixpanelProvider} from 'react-mixpanel-browser';


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
    <MixpanelProvider>
      <BrowserRouter>
        <StyledContainer>
          <InnerContainer>
            <Container>
              <img src={Logo} style={{marginBottom: '32px'}}
                alt='Orthogonal Logo'/>
              <Route path={[
                '/home',
                '/report',
                '/sharedata',
                '/dosage',
                '/feedback',
                '/calorieinput',
                '/alerts',
                '/success']} component={NavMenu} />
              <Route exact path={[
                '/report',
                '/sharedata',
                '/dosage',
                '/feedback',
                '/calorieinput',
                '/alerts']} component={BackButton} />
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
            </Container>

          </InnerContainer>
        </StyledContainer>
      </BrowserRouter>
    </MixpanelProvider>
  );
};
