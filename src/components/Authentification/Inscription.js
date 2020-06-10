import React , { Component }  from "react";
import { View, TextInput, StyleSheet ,Image ,Button, Text, Picker} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

class Inscription extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  Clear = () => {
   this.textInput1.clear()
   this.textInput2.clear()
   this.textInput3.clear()
   this.textInput4.clear()
   this.textInput5.clear()
   this.textInput6.clear()
   this.textInput7.clear()
   this.textInput8.clear()
  };
  
  
  
  render() {
      
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
        
         <RNPickerSelect  placeholder={{
                    label: '  Patient  ',
                    value: null,
                   
                }}
              
                onValueChange={(value) => console.log(value)}
                items={[
               { label: '  Médecin  ', value: 'Médecin'},
            
            ]}
        />
      
       
          <View style={styles.SectionStyle}>
                <TextInput ref={input => { this.textInput5 = input }} 
                        style={{flex:1}}
                        placeholder="Spécialité"
                        underlineColorAndroid="transparent"
                    />
          </View>
          <View style={styles.SectionStyle}>
                <TextInput ref={input => { this.textInput6 = input }} 
                        style={{flex:1}}
                        placeholder="Hopital"
                        underlineColorAndroid="transparent"
                    />
          </View>
          {this.state.show ? (
          <View style={styles.SectionStyle}>
          
                <TextInput ref={input => { this.textInput7 = input }} 
                        style={{flex:1}}
                        placeholder="Pathologie"
                        underlineColorAndroid="transparent"
                    />
                    
          </View>
          ) : null}
          <View style={styles.SectionStyle}>
                <TextInput ref={input => { this.textInput8 = input }} 
                        style={{flex:1}}
                        placeholder="Mot De Passe"
                        underlineColorAndroid="transparent"
                    />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
                 <View style={styles.ButtonStyle}>
                     <Button color="#49B7C1"  title="   S'inscrire    " onPress={() => {}} large></Button>
                 </View>
                 <View style={styles.ButtonStyle2}>
                     <Button color="#49B7C1"  title="    Annuler    " onPress={this.Clear}  large></Button>
                 </View>
             </View>
        
      </View>
      </View>

    )
  }
}

export default Inscription
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
    marginTop: 15,
    width : 250,
    height : 50 , 
    left : 35 ,
    margin :20, 
    flexDirection: 'row' 

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
