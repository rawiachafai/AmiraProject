import React from 'react'
import { View,TouchableOpacity, TextInput,ScrollView, StyleSheet ,Image ,Button, Text, Linking, KeyboardAvoidingView} from 'react-native'
class Ordonnance extends React.Component {
    
render(){
return(
<View style={{flex:1,backgroundColor:'#FFFFFF'}}>
<View style={{backgroundColor:'white'}} >
            <View style={styles.LogoView}>
             <Text  style={styles.LogoStyle}> Ordonnance </Text>
            </View>
        </View>
        <View style={{flexDirection:'row',left:220,paddingTop:55}}>
            <Text> Patient(e):  </Text>
            <Text> Rawia Chafai </Text>
        </View>
        <View style={{flexDirection:'row',left:220,paddingTop:30}}>
            <Text> Age:  </Text>
            <Text> 23 </Text>
        </View>
        <View  style={{flexDirection:'row',margin:30}}>
            <TextInput style={{left:2,borderColor: '#A7A8A9',width:'50%'}}  
            placeholder="Médicament"
            />
            <TextInput style={{width:'30%'}}
            placeholder="Posologie"
            />
            <TextInput style={{width:'20%'}}
            placeholder="Durée"
            />
            
        </View>
        <View  style={{flexDirection:'row',margin:30}}>
            <TextInput style={{left:2,borderColor: '#A7A8A9',width:'50%'}}  
            placeholder="Médicament"
            />
            <TextInput style={{width:'30%'}}
            placeholder="Posologie"
            />
            <TextInput style={{width:'20%'}}
            placeholder="Durée"
            />
            
        </View>
        <View  style={{flexDirection:'row',margin:30}}>
            <TextInput style={{left:2,borderColor: '#A7A8A9',width:'50%'}}  
            placeholder="Médicament"
            />
            <TextInput style={{width:'30%'}}
            placeholder="Posologie"
            />
            <TextInput style={{width:'20%'}}
            placeholder="Durée"
            />
            
        </View>

</View>

)
}}
export default Ordonnance
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
      SectionStyle: {
        flexDirection:'row',
        borderBottomWidth: 0.5,
        borderColor: '#A7A8A9',
        height: 40,
        borderRadius: 5 ,
        marginTop:80,
        left: 6,
        width: '50%',
      
        
    
    
      }
    })