import React from 'react'
import ReactDOM from 'react-dom'
import { View, TextInput, StyleSheet ,Image ,Button, Text, Linking , KeyboardAvoidingView} from 'react-native'
import { BrowserRouter as Router, link} from 'react-router-dom'
import { Link } from '@react-navigation/native';



class Mdpoublie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      nameValidate:false,
      username:''
      
    }
  
  }
  validate(text,type)
  {      
   let rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
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
    }}
  render() {
    let rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid =rjx.test(this.state.value)
    return (
     
      <KeyboardAvoidingView behavior='padding'style={{backgroundColor:'#FFFFFF',flex:1}}>
     
      <View style={{  paddingTop: 22}}>
      <Image source={require('../../assets/logocoagc.jpg')} 
      style={{height: 120,width: 300, left: 50}} />
      </View>
      <View style={{  paddingTop: 100 }}>

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
        borderBottomColor: 'transparent',
        height: 40,
        borderRadius: 5 ,
        margin:17,
        left: 6},
    ButtonStyle:{
        marginTop: 30 ,
        width : 380,
        height : 50 , 
        margin :20, 
            },
    red: {
         borderBottomColor: 'red'
            },
    green: {
          borderBottomColor: 'green'
            } ,
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
              borderRadius: 5 ,}       
        

    
    })