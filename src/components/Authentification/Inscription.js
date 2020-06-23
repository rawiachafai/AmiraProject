import React , { Component }  from "react";
import { View, TextInput,ScrollView, StyleSheet ,Image ,Button, Text} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
class Inscription extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      checked: 'first',
      language: 'Homme',
      profession: 'Médecin',
      name: '',
      nameValidate: true,
      pname: '',
      pnameValidate: true,
      email: '',
      emailValidate: true,
      specialityValidate: true,
      specialite:'',
      hopitalValidate:true,
      hopital:'',
      pathologie:'',
      pathValidate: true,
      passwordValidate: true,
      password: '',
      cpasswordValidate:true,
      cpassword: ''
      

    };
  }
  validate(text,type)
  {      
   let  num=/^[a-zA-Z]+$/
   let rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   if (type=='username')
   { if (num.test(text))
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
   else if (type=='pname')
   {
     if (num.test(text)) 
     {
       this.setState({
        pnameValidate: true
       })
     }
     else {
       this.setState({
        pnameValidate: false,
       })
     }
   }
    else if (type=='email')
     {  
       if (rjx.test(text)) 
      {
        this.setState({
         emailValidate: true
        })
      }
      else {
        this.setState({
         emailValidate: false,
        })
      }

      }
      else if (type=='specialite')
      {  
        if (num.test(text)) 
       {
         this.setState({
          specialityValidate: true
         })
       }
       else {
         this.setState({
          specialityValidate: false,
         })
       }
 
       }
       else if (type=='hopital')
      {  
        if (num.test(text)) 
       {
         this.setState({
          hopitalValidate: true
         })
       }
       else {
         this.setState({
          hopitalValidate: false,
         })
       }
 
       }
       else if (type=='pathologie')
      {  
        if (num.test(text)) 
       {
         this.setState({
          pathValidate: true
         })
       }
       else {
         this.setState({
          pathValidate: false,
         })
       }
 
       }
    else if (type=='password')
       {
     if (num.test(text)) 
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
   else if (type=='cpassword')
       {
     if (num.test(text)) 
     {
       this.setState({
        cpasswordValidate: true
       })
     }
     else {
       this.setState({
        cpasswordValidate: false,
       })
     }
   }
    }
  
  render() {
    const { checked } = this.state;
  
    
    return (
        
        <View>
        <View style={{ backgroundColor: '#E9F2FA', paddingTop:-10 }}>
                  <View style={styles.LogoView}>
                         <Text  style={styles.LogoStyle}> COAGCARE </Text>

                  </View>
                  </View>
  <ScrollView>             
<View style={{paddingTop:40}} >
<View style={styles.SectionStyle}>
        <TextInput style={[styles.input,
        !this.state.nameValidate? styles.error:null
        
      ]}
        placeholder="Nom"
        onChangeText={(text)=>this.validate(text,'username')}
        maxLength={14}
        />
     </View>
     <View style={styles.SectionStyle}>
     <TextInput style={[styles.input,
        !this.state.pnameValidate? styles.error:null
        
      ]}
        placeholder="Prénom"
        onChangeText={(text)=>this.validate(text,'pname')}
        maxLength={14}
        />
    </View>
      <View style={styles.SectionStyle}>
         <TextInput style={[styles.input,
        !this.state.emailValidate? styles.error:null
        
      ]}
          placeholder="E-mail"
          onChangeText={(text)=>this.validate(text,'email')}
         
         />
      </View>
          
          <Picker
         selectedValue={this.state.language}
         style={{height: 50, width: 150 ,margin:8,color:"#A5A5A5",left:10}}
         onValueChange={(itemValue, itemIndex) =>
         this.setState({language: itemValue})
          }>
         <Picker.Item label="Homme" value="Homme" />
        <Picker.Item label="Femme" value="Femme" />
       </Picker>
     
     <Picker
         selectedValue={this.state.profession}
         style={{height: 50, width: 150 ,margin:8,color:"#A5A5A5",left:10}}
         onValueChange={(itemValue, itemIndex) =>
         this.setState({profession: itemValue})
          }>
         <Picker.Item label="Médecin" value="Médecin" />
        <Picker.Item label="Patient" value="Patient" />
       </Picker>
         
      
       
          <View style={styles.SectionStyle}>
          <TextInput style={[styles.input,
            !this.state.specialityValidate? styles.error:null
        
          ]}
          placeholder="Spécialité"
          onChangeText={(text)=>this.validate(text,'specialite')}
          maxLength={20}
         />
          </View>
          <View style={styles.SectionStyle}>
          <TextInput style={[styles.input,
            !this.state.hopitalValidate? styles.error:null
        
          ]}
          placeholder="Hopital"
          onChangeText={(text)=>this.validate(text,'hopital')}
          maxLength={20}
         
         />
          </View>
          
          <View style={styles.SectionStyle}>
          
          <TextInput style={[styles.input,
            !this.state.pathValidate? styles.error:null
        
          ]}
          placeholder="Pathologie"
          onChangeText={(text)=>this.validate(text,'pathologie')}
          maxLength={20}
         
         />
                    
          </View>
          <View style={styles.SectionStyle}>
              <TextInput 
          placeholder="Poids"
          onChangeText={(text)=>this.validate(text,'poids')}
          maxLength={5}
          keyboardType='decimal-pad'
         
         />
          </View>
          <View style={styles.SectionStyle}>
                <TextInput 
                        style={{flex:1}}
                        placeholder="Taille"
                        underlineColorAndroid="transparent"
                        maxLength={4}
                        keyboardType='decimal-pad'
                    />
          </View>
          
          
          <View style={styles.SectionStyle}>
              <TextInput style={[styles.input,
              !this.state.passwordValidate? styles.error:null
      ]}
        
          placeholder="Mot De Passe"
          onChangeText={(text)=>this.validate(text,'password')}
          maxLength={12}
          
         />
          </View>
          <View style={styles.SectionStyle}>
             <TextInput style={[styles.input,
              !this.state.cpasswordValidate? styles.error:null
      ]}
          placeholder="Confirmer Mot De Passe"
          onChangeText={(text)=>this.validate(text,'cpassword')}
          maxLength={12}
          
         />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
                 <View style={styles.ButtonStyle2}>
                     <Button color="#FE8C98"  title="    Annuler    " onPress={this.Clear}  large></Button>
                 </View>
                 <View style={styles.ButtonStyle}>
                     <Button color="#49B7C1"  title="   S'inscrire    " onPress={() => {}} large></Button>
                 </View>
             </View>
        
      </View>
      </ScrollView>
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
    margin:15,
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
    marginTop: 15,
    width : 250,
    height : 50 , 
    right:140,
    margin :20, 
    flexDirection: 'row' 

  },
  ButtonStyle2:{
    marginTop: 15 ,
    width : 250, 
    height : 50  ,
    
    left : 15 ,
    margin :55,
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
  },
  input: {
    width: '100%',
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
