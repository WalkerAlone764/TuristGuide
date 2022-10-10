import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './app/modules/Home/HomeScreen';
import Router from './app/navigator/tabNavigation';
const Tab = createNativeStackNavigator();
function App(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
