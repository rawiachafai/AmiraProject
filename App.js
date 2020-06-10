import React, { Component } from 'react';
import Espacedocteur from './src/components/Espacedocteur/Espacedocteur'
import Mdpoublie from './src/components/Authentification/Mdpoublie'
import Authentifier from './src/components/Authentification/Authentifier'
import Inscription from './src/components/Authentification/Inscription'
import Ajouterpatient from './src/components/Espacedocteur/Ajouterpatient'
import Essai from './src/navigation/Essai'
import Tabnavigation from './src/navigation/Tabnavigation'
import {View} from 'react-native'
import ListePatient from './src/components/Espacedocteur/ListePatient'
export default class App extends React.Component {
  render() {
    return (
      
        <Espacedocteur/>
    
    );
  }
}