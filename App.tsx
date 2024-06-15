import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens 
import LoginScreen from './Src/Screens/LoginScreen'
import RegisterScreen from './Src/Screens/RegisterScreen';
import HomeScreen from './Src/Screens/HomeScreen';


const Stack = createNativeStackNavigator();

// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  return (
      <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'}/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
 
  )
}

export default App

const styles = StyleSheet.create({})