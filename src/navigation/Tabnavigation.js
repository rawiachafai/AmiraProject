
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Espacedocteur from '../components/Espacedocteur/Espacedocteur'
import Profile  from '../components/Espacedocteur/Profile'
import Notification from '../components/Espacedocteur/Notification'


const Tab = createMaterialBottomTabNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tabnavigation = () => (
  
<NavigationContainer>
  <Tab.Navigator initialRouteName="Home"
  
  barStyle={{ backgroundColor: '#58AAC5' }}>
<Tab.Screen name="Home" component={Espacedocteur}
options={{
  tabBarLabel: 'Accueil',
  tabBarColor: '#A7A8A9',
  tabBarIcon: ({ color }) => (
    <Icon name="home-outline" color={color} size={26} />
  ) }}

/>
<Tab.Screen name="Notifications" component={NotificationStackScreen} 
options={{
    tabBarLabel: 'Notification',
    tabBarIcon: ({ color }) => (
      <Icon name="bell" color={color} size={26} />
    ) }}
/>

<Tab.Screen name="Profil" component={ProfilStackScreen} 
options={{
    tabBarLabel: 'Profil',
    tabBarColor: '#A7A8A9',
    tabBarIcon: ({ color }) => (
      <Icon name="account-outline" color={color} size={26} />
    ) }}
/>
  </Tab.Navigator>
</NavigationContainer>
  )

export default Tabnavigation;

const NotificationStackScreen = ({navigation}) => (

  <NotificationStack.Navigator screenOptions={{
     headerStyle: {
       backgroundColor: '#339DC1',
     },
     headerTintColor: '#fff',
     headerTitleStyle:{
       fontWeight: 'bold'
     }

  }}>
    <NotificationStack.Screen name="Notification" component={Notification} />
    
  </NotificationStack.Navigator> 
  
)
const ProfilStackScreen = ({navigation}) => (
  
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#339DC1',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }}}>
    <ProfileStack.Screen name="Profil" component={Profile} />
    
  </ProfileStack.Navigator>
  
)


