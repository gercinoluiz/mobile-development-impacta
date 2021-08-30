import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBottomNavigation from './src/routes/app.routes';
import Routes from './src/routes';
import AppProvider from './src/hooks/AppProvider';


export default function App() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style='light' backgroundColor='#000a12' />

          <Routes />


        </NavigationContainer >
      </SafeAreaProvider>
    </AppProvider>
  );
}
