/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/routes/index';
import {Provider} from 'react-redux';
import store from './src/store/index';

// import Tabs from './src/common/Tabs';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <Route />
      </Provider>
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
