import React, {createContext, useContext} from 'react';

const context = createContext(null);
export default context;

export const Consumer = context.Consumer;
export const Provider = context.Provider;

export const useCountly = () => useContext(context);

export const withCountly = (Component) => (props) => (
  <Consumer>
    {(countly) => (
      <Component countly={countly} {...props} />
    )}
  </Consumer>
);
