import React , { Component }  from "react";
import { View, TextInput,ScrollView, StyleSheet ,Image ,Button, Text} from 'react-native'
import {Picker} from '@react-native-community/picker';
class Parametres extends React.Component {
    constructor() {
        super();
        this.state = {
        
          language: 'Français'
          
        };
      }
      render(){
          return(
            <View>
                <View style={{backgroundColor:'#FFFFFF' , paddingTop:-10 }}>
                  <View style={styles.LogoView}>
                   <Text  style={styles.LogoStyle}> PARAMETRES </Text>

                  </View>
                  </View>
            <View style={{paddingTop:200}}>
            <Text style={styles.TextStyle}> LANGUE</Text>    
            <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 300 ,margin:-15,color:"#A5A5A5",left:13}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
             }>
            <Picker.Item label="Français" value="Français" />
           <Picker.Item label="Anglais" value="Anglais" />
          </Picker>
          </View>
          </View>
          )
      }
    }
    export default Parametres
    const styles = StyleSheet.create({
        LogoStyle:{
            color: 'white', 
            fontWeight: 'bold',
            fontSize: 30
          },
          LogoView:{
            height:50, 
            backgroundColor: '#49B7C1', 
            alignItems: 'center',
            justifyContent: 'center'
          },
          TextStyle:{
            fontWeight: 'bold',
            color:'#2CBFE6',
            left:5
          }
        })   