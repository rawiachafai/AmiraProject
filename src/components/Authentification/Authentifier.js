import React from 'react'
import { View, TextInput, StyleSheet ,Image ,Button, Text, Linking, KeyboardAvoidingView} from 'react-native'
import { Link } from '@react-navigation/native';

class Authentifier extends React.Component {
  state = {
    email: '',
      mdp: '',
      emailError: '',
      emailValidator: '',
 
  }
 
  handleMdpChange = mdp => { 
    if (+mdp >= 0 && mdp.length <= 8) {
    this.setState({mdp} , this.validateForm )}
    else {
      alert("mdp doit contenir que des nombres et du longueurs 8 ")
    }
  }
emailValidator(){
    let rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid =rjx.test(this.state.email)
    
if(this.state.email=="")
{
  this.setState({emailError:"email ne doit pas vide"})
} else if(!isValid){
  this.setState({emailError:"email doit etre de la format  email"})
} else {
  <Text style={{color: 'green'}}>
 { this.setState({emailValidator:" valider"})} </Text>
}
}


  render() {
    return (
      
     <KeyboardAvoidingView behavior='position'>
        <View style={{ backgroundColor: '#E9F2FA', paddingTop:-10 }}>
                  <View style={styles.LogoView}>
                  <Text  style={styles.LogoStyle}> COAGCARE </Text>

                  </View>
                  </View>
      <View style={{  paddingTop: 30}}>
      <Image source={require('../../assets/logo5.jpg')} style={{height: 120,width: 230, left: 80}} />
      </View>

    <View style={{  paddingTop: 50 }}>

     <View style={styles.SectionStyle}>
       <Image source={require('../../assets/mail.png')} style={styles.ImageStyle} />

               <TextInput
                 onChangeText={(text) => { this.setState({email: text})} }
            
                 onBlur={()=>this.emailValidator()}
                  placeholder={'E-mail'} />
              
     </View>
     <View style={{margin: -20}}>
                 <Text style={{color: 'red' ,left: 50}}>{this.state. emailError} </Text>
                  <Text style={{color: 'green',left: 50}}>
                  {this.state. emailValidator} </Text>
      </View>
     <View style={styles.SectionStyle}>
            <Image source={require('../../assets/p1.png')} style={styles.ImageStyle} />

                    <TextInput
                        style={{flex:1}}
                        placeholder="Mot De Passe"
                        onChangeText={(text) => { this.setState({mdp: text})} }
                        keyboardType='numeric'
                        maxLength={6}
                        onBlur={()=>this.MdpValidation()}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        
                    />
          </View>
         
          <View style={{ flexDirection: 'row'}}>
                 <View style={styles.ButtonStyle}>
                     <Button color="#49B7C1"  title="Se Connecter" onPress={() => navigation.navigate('Inscription')} large
                      ></Button>
                 </View>
                 <View style={styles.ButtonStyle2}>
                     <Button color="#49B7C1"  title="     S'inscrire   " onPress={() => navigation.navigate('Inscription')} large></Button>
                 </View>
            </View>
          <View style ={{flexDirection: 'row', left:40, margin: 30}}>
                  <Text style={{color:"#A5A5A5"}}> J'ai oublié mon mot de passe!</Text>
                  <Text style={{color: 'blue'}}>
                  <Link to="/Authentifier/Authen"> Cliquer Ici </Link>
        </Text>
                  </View> 
            

      </View>
      </KeyboardAvoidingView>

    )
  }
}

export default Authentifier
const styles = StyleSheet.create({

 SectionStyle: {
    flexDirection: 'row',

    borderBottomWidth: 0.5,
    borderColor: '#A7A8A9',
    height: 40,
    borderRadius: 5 ,
    margin:17,
    left: 6


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
    marginTop: 30 ,
    width : 250,
    height : 50 , 
    left : 35 ,
    margin :20, 
    flexDirection: 'row' 

  },
  ButtonStyle2:{
    marginTop: 30 ,
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
  LogoView:{
    height:50, 
    backgroundColor: '#49B7C1', 
    alignItems: 'center',
    justifyContent: 'center'
  }
 




})