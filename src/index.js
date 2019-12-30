import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#0E0B16" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
