import Countly from 'countly-sdk-web';
import React from 'react';
import {Provider} from './contexts/countly';
import PropTypes from 'prop-types';

const CountlyProvider = ({children, configuration}) => {
  const countly = Countly || {};
  countly.namespace = 'Countly_';
  countly.q = Countly.q || {};
  countly.app_key = process.env.REACT_APP_COUNTLY_TOKEN;

  countly.url = configuration.url;

  countly.init();
  if (configuration.trackPageViews) {
    countly.q.push(['track_pageview']);
  }
  if (configuration.trackSessions) {
    Countly.q.push(['track_sessions']);
  }

  return (
    <Provider value={countly}>
      {children}
    </Provider>
  );
};

CountlyProvider.defaultProps = {
  configuration: {
    // default to trial URL in US if not specified.
    url: 'https://us-try.count.ly',
    trackPageViews: true,
    trackSessions: true,
  },
};

CountlyProvider.propTypes = {
  children: PropTypes.element.isRequired,
  configuration: PropTypes.shape({
    url: PropTypes.string,
    trackPageViews: PropTypes.bool,
    trackSessions: PropTypes.bool,
  }),
};

export default CountlyProvider;
