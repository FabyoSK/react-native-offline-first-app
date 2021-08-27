import { StatusBar } from 'react-native';
import React from 'react';
import { Home } from './src/pages';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home />
    </>
  );
}
