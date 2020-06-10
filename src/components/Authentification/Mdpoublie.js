import React from 'react'
import ReactDOM from 'react-dom'
import { View, TextInput, StyleSheet ,Image ,Button, Text, Linking , KeyboardAvoidingView} from 'react-native'
import { BrowserRouter as Router, link} from 'react-router-dom'
import { Link } from '@react-navigation/native';



class Mdpoublie extends React.Component {
  render() {
    return (
     
      <KeyboardAvoidingView behavior='position'>
        <View style={{ backgroundColor: '#E9F2FA'}}>
                  <View style={styles.LogoView}>
                  <Text  style={styles.LogoStyle}> COAGCARE </Text>

                  </View>
                  </View>
      <View style={{  paddingTop: 30}}>
      <Image source={require('../../assets/logo5.jpg')} style={styles.LogoApp} />
      </View>
      <View style={{  paddingTop: 100 }}>

       <View style={styles.SectionStyle}>
       <Image source={require('../../assets/mail.png')} style={styles.ImageStyle} />

          <TextInput

              placeholder="E-mail"
              underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.ButtonStyle}>
            <Button color="#49B7C1"  title="Renouvler Votre Mot De Passe" onPress={() => {}} large></Button>
        </View>
        <View style ={{flexDirection: 'row', left:16, margin: 4,paddingTop: -8 }}>
                  <Text style={{color:"#A5A5A5"}}> Retour ! </Text>
                  <Text style={{color: 'blue'}}>
                  <Link to="/Authentifier/Authen"> Se Connecter </Link>
        </Text>
        
        </View> 
        

      </View>
    </KeyboardAvoidingView>
     
      )
  }
}


export default Mdpoublie;
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
      LogoApp:{
          height: 130,
          width: 300,
          left: 50
      },
      ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 22,
        resizeMode : 'stretch',
        alignItems: 'center'
  
    },
    SectionStyle: {
        flexDirection: 'row',
    
        borderBottomWidth: 0.5,
        borderColor: '#A7A8A9',
        height: 40,
        borderRadius: 5 ,
        margin:17,
        left: 6},
    ButtonStyle:{
        marginTop: 30 ,
        width : 380,
        height : 50 , 
        margin :20, 
            }
        

    
    })