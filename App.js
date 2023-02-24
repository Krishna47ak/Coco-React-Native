import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Route from './src/navigator/Route';

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}