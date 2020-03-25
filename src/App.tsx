import React, {Fragment} from 'react';
import {Route} from 'react-router';
import {Home} from './Components/Home/Home';
import {Pairing} from './Components/Pairing/Pairing';
import {InsulinDosage} from './Components/InsulinDosage/InsulinDosage';
import {Feedback} from './Components/Feedback/Feedback';
import {CalorieInput} from './Components/CalorieInput/CalorieInput';
import {Alerts} from './Components/Alerts/Alerts';
import {Login} from './Components/Login/Login';

export const App:React.FC = () => {
  return (
    <Fragment>
      <Route exact path='/' component={Login}/>
      <Route exact path='/pairdevice' component={Pairing}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/insulindosage' component={InsulinDosage}/>
      <Route exact path='/feedback' component={Feedback}/>
      <Route exact path='/calorieinput' component={CalorieInput}/>
      <Route exact path='/alerts' component={Alerts}/>
    </Fragment>
  );
};
