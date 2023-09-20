import * as React from 'react';
import Main from './src/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function App() {

  return (
  <View style={{flex:1}}>
    <Main/>
  </View>
  );
};


