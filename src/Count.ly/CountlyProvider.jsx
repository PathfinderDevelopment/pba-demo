import Countly from 'countly-sdk-web';
import React from 'react';
import {Provider} from './contexts/countly';


const CountlyProvider = (props) => {
  const countly = Countly || {};
  countly.namespace = 'Countly_';
  countly.q = Countly.q || [];
  countly.debug = true;
  countly.app_key = process.env.REACT_APP_COUNTLY_TOKEN;

  countly.url = 'https://us-try.count.ly';
  Countly.q.push(['track_sessions']);
  countly.q.push(['track_pageview']);

  countly.init();

  return (
    <Provider value={countly}>
      {props.children}
    </Provider>
  );
};

export default CountlyProvider;
