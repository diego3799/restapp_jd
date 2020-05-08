import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import React from 'react';
import SignUpScreen from './src/screens/SignUpScreen';
import MenuScreen from './src/screens/MenuScreen';
const navigator= createStackNavigator({
  Home:HomeScreen,
  Sign:SignUpScreen,
  Menu:MenuScreen

},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title:'Foodie',
    headerTintColor:'white',
    headerStyle: {
      backgroundColor: '#d35452'
    },headerTitleStyle:{
      color:'white',
      fontWeight:'100'
    }
  }
})
const App=createAppContainer(navigator);
export default ()=>{
  return <App/>
}