
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DetailsPatient from '../components/Espacedocteur/DetailsPatient'
import PatientMesure from '../components/Espacedocteur/PatientMesure'


const Tab = createMaterialBottomTabNavigator();


const TabnavigationDetails = () => (
  
<NavigationContainer>
  <Tab.Navigator initialRouteName="Home"
  
  barStyle={{ backgroundColor: '#FFFFFF' }}>
<Tab.Screen name="Home" component={DetailsPatient}
options={{
  tabBarLabel: 'Patient',
  tabBarColor: '#FFFFFF',
  tabBarIcon: ({ color }) => (
    <Icon name="format-columns" color={color} size={26} />
  ) }}

/>
<Tab.Screen name="Notifications" component={PatientMesure} 
options={{
    tabBarLabel: 'Mesure',
    tabBarIcon: ({ color }) => (
      <Icon name="current-ac" color={color} size={26} />
    ) }}
/>


  </Tab.Navigator>
</NavigationContainer>
  )

export default TabnavigationDetails;




