
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Espacedocteur  from '../components/Espacedocteur/Espacedocteur'
import Ajouterpatient from '../components/Espacedocteur/Ajouterpatient'
import DrawerContent from '../navigation/DrawerContent'
import Authentifier from '../components/Authentification/Authentifier'


const Drawer = createDrawerNavigator();
export function Essai() {
    
  return(
<NavigationContainer>
  <Drawer.Navigator drawerContent={props => <DrawerContent {... props} />} >
<Drawer.Screen name="Home" component={Authentifier} />
<Drawer.Screen name="Profile" component={Ajouterpatient} />

  </Drawer.Navigator>
</NavigationContainer>
  )
}


export default Essai;