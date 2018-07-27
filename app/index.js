import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#47F6D7A',
  $white: '#FFFFFF',
});

export default () => <Home />;
