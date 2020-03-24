import React, {Fragment} from 'react';
import './App.css';
import { Route } from 'react-router';
import { Home } from './Components/Home/Home';
import { Pairing } from './Components/Pairing/Pairing';
import { InsulinDosage } from './Components/InsulinDosage/InsulinDosage';
import { Feedback } from './Components/Feedback/Feedback';
import { CalorieInput } from './Components/CalorieInput/CalorieInput';
import { Alerts } from './Components/Alerts/Alerts';
import { Login } from './Components/Login/Login';

export const App:React.FC = () => {
  return (
    <Fragment>
      <Route path='/' component={Login}/>
      <Route path='/pairdevice' component={Pairing}/>
      <Route path='/home' component={Home}/>
      <Route path='/insulindosage' component={InsulinDosage}/>
      <Route path='/feedback' component={Feedback}/>
      <Route path='/calorieinput' component={CalorieInput}/>
      <Route path='/alerts' component={Alerts}/>
    </Fragment>
  );
}