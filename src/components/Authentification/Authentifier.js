import React from 'react'
import { View, TextInput, StyleSheet ,Image ,Button, Text, Linking, KeyboardAvoidingView} from 'react-native'
import { Link } from '@react-navigation/native';

class Authentifier extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      nameValidate:false,
      passwordValidate:false

    }
  }
  validate(text,type)
  {      
   let rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   let  num=/^[a-zA-Z]+$/
    if (type=='username')
    { if (rjx.test(text))
      {
        this.setState({
          nameValidate:true
        })
      }
      else{
        this.setState({
          nameValidate:false,
        })
      }
    }
    else if (type=='password')
    {
      if ((num.test(text)) || (this.state.password.length > 8))
      {
        this.setState({
          passwordValidate: true
        })
      }
      else {
        this.setState({
          passwordValidate: false,
        })
      }
    }
  }
  render() {
   
    
    return (
      
     <KeyboardAvoidingView behavior='padding'style={{backgroundColor:'#FFFFFF',flex:1}}>
     
      <View style={{  paddingTop: 22}}>
      <Image source={require('../../assets/logocoagc.jpg')} 
      style={{height: 120,width: 300, left: 50}} />
      </View>

    <View style={{  paddingTop: 50 }}>

     <View style={styles.SectionStyle}>
       <Image source={require('../../assets/mail.png')} style={styles.ImageStyle} />

       <TextInput style={[styles.input,
        !this.state.nameValidate? styles.error:null,
        this.state.nameValidate? styles.green:null
      ]}
          placeholder="E-mail"
          onChangeText={(text)=>this.validate(text,'username')}
         
         />
              
     </View>
  
     <View style={styles.SectionStyle}>
            <Image source={require('../../assets/p1.png')} style={styles.ImageStyle} />
            <TextInput style={[styles.input,
        !this.state.passwordValidate? styles.error:null,
        this.state.passwordValidate? styles.green:null
      ]}
        
          placeholder="Mot De Passe"
          onChangeText={(text)=>this.validate(text,'password')}
          
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
    borderBottomColor: '#A7A8A9',
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
  input: {
    width: '90%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent'
  },
  
  green: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    height: 40,
    borderRadius: 5 ,
  },
  error: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    height: 40,
    borderRadius: 5 ,
   
  }
  
 




})