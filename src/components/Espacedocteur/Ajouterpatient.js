import React , { Component }  from "react";
import { View, TextInput, StyleSheet ,Image ,Button, Text, Picker} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { RadioButton } from 'react-native-paper';

class Ajouterpatient extends React.Component {
    state = {
        checked: 'first',
      };
 
  render() {
    const { checked } = this.state;
    return (
        
        <View>
        <View style={{ backgroundColor: '#E9F2FA', paddingTop:-10 }}>
                  <View style={styles.LogoView}>
                         <Text  style={styles.LogoStyle}> COAGCARE </Text>

                  </View>
                  </View>

<View style={{  paddingTop: 8}}>
<Image source={require('../../assets/logo5.jpg')} style={{height: 80,width: 220, left: 90}} />
</View>

 <View >

<View style={styles.SectionStyle}>
    <TextInput ref={input => { this.textInput1 = input }} 
    placeholder="nom"
    underlineColorAndroid="transparent"
               />
     </View>
     <View style={styles.SectionStyle}>
          <TextInput ref={input => { this.textInput2 = input }} 
          placeholder="prenom"
          underlineColorAndroid="transparent"
                    />
    </View>
          <View style={styles.SectionStyle}>
          <TextInput ref={input => { this.textInput3 = input }} 
          placeholder="E-mail"
          underlineColorAndroid="transparent"
                         />
          </View>
     <View style={styles.SectionStyle}>
          <TextInput ref={input => { this.textInput4 = input }} 
          style={{flex:1}}
          placeholder="Age"
          underlineColorAndroid="transparent"
                    />
     </View>
        
          <View style={styles.SectionStyle}>
                <TextInput ref={input => { this.textInput5 = input }} 
                        style={{flex:1}}
                        placeholder="Poids"
                        underlineColorAndroid="transparent"
                    />
          </View>
          <View  style={{ flexDirection: 'row'}}>
            <View style={{flexDirection: 'row',left:6, margin: 2,paddingTop: -10}}>
            <Text style={{color:"#A5A5A5", margin:6}}> Homme </Text>
           <RadioButton
          value="first" 
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
           />
           </View>
          <View style={{ flexDirection:'row' ,left:30, margin: 4,paddingTop: -10 }}> 
          <Text style={{color:"#A5A5A5", margin:6}}> Femme </Text>
          <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
      </View>
      </View>
          
          <View style={styles.SectionStyle}>
          
                <TextInput ref={input => { this.textInput7 = input }} 
                        style={{flex:1}}
                        placeholder="Pathologie"
                        underlineColorAndroid="transparent"
                    />
                    
          </View>
         
          <View style={styles.SectionStyle}>
                <TextInput ref={input => { this.textInput8 = input }} 
                        style={{flex:1}}
                        placeholder="Mot De Passe"
                        underlineColorAndroid="transparent"
                    />
          </View>
        
                 <View style={styles.ButtonStyle}>
                     <Button color="#49B7C1"  title=" Ajouter  " onPress={() => {}} large></Button>
                 </View>
             
      </View>
      </View>

    )
  }
}

export default Ajouterpatient
const styles = StyleSheet.create({

 SectionStyle: {
    flexDirection: 'row',

    borderBottomWidth: 0.5,
    borderColor: '#A7A8A9',
    height: 40,
    borderRadius: 5 ,
    margin:7,
    left: 6


  },
  androidPicker: {
    color: '#6D6D6D',
    backgroundColor: '#FFF',
    marginBottom: 20,
    height: 40,
    alignSelf: 'stretch', 
    alignItems:'center', 
    justifyContent:'center',
},

  ImageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center'

  },
  ButtonStyle:{
    marginTop: 30,
    width : 250,
    height : 50 , 
    left : 55 ,
    margin :20

  },
  ButtonStyle2:{
    marginTop: 15 ,
    width : 250, 
    height : 50  ,
    right:80,
    margin :20, 
    flexDirection: 'row' 
  },
  LogoStyle:{
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 30
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  LogoView:{
    height:50, 
    backgroundColor: '#49B7C1', 
    alignItems: 'center',
    justifyContent: 'center'
  }
  


})
