import React from 'react'
import { View,TouchableOpacity, TextInput,ScrollView, StyleSheet ,Image ,Button, Text, Linking, KeyboardAvoidingView} from 'react-native'
import { Table, Row } from 'react-native-table-component';
import { Link } from '@react-navigation/native';

class PatientMesure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          width: 90
        };
      }
render(){
    const width = `${80 / parseInt(this.state.width / 100)}%`;
    return(
<View style={{backgroundColor:'#FFFFFF'}}>
       <View style={{backgroundColor:'white'}} >
            <View style={styles.LogoView}>
             <Text  style={styles.LogoStyle}> MESURE </Text>
            </View>
        </View>
        <ScrollView>
            <View style={{marginTop: -42}}>
        <View style={[styles.wrapper, { width: width }]}>
         <View style={styles.box}>
          <Text style={styles.TextStyle}> Date Mesure: </Text>
          <Text style={styles.TextStyle}> Valeur Mesure: </Text>
          <Text style={styles.TextStyle}> Poids: </Text>
          <Text style={styles.TextStyle}> Taille: </Text>
          <Text style={styles.TextStyle1}>
                  <Link to=""> Ordonnance </Link>
        </Text>
        </View>
        </View>
       <View style={[styles.wrapper1, { width: width }]}>

       <View style={styles.box1}>
          <Text style={styles.TextStyle}> Date Mesure: </Text>
          <Text style={styles.TextStyle}> Valeur Mesure: </Text>
          <Text style={styles.TextStyle}> Poids: </Text>
          <Text style={styles.TextStyle}> Taille: </Text>
          <Text style={styles.TextStyle1}>
                  <Link to=""> Ordonnance </Link>
        </Text>
</View>
</View>
<View style={[styles.wrapper2, { width: width }]}>

       <View style={styles.box2}>
          <Text style={styles.TextStyle}> Date Mesure: </Text>
          <Text style={styles.TextStyle}> Valeur Mesure: </Text>
          <Text style={styles.TextStyle}> Poids: </Text>
          <Text style={styles.TextStyle}> Taille: </Text>
          <Text style={styles.TextStyle1}>
                  <Link to=""> Ordonnance </Link>
        </Text>
</View>
</View>
</View>
</ScrollView>
</View>

    )
}

}

export default PatientMesure
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
      box: {
        width: 350,
        height: 200,
        backgroundColor: '#0C909C',
        opacity: 0.3
        
        
      },
      wrapper: {
        marginVertical: 80, alignItems: 'center'
      },
      box1: {
        width: 350,
        height: 200,
        backgroundColor: '#7AD5DE',
        opacity: 0.4
        
        
      },
      wrapper1: {
        marginTop:-60,
        margin:32
      },
      box2: {
        width: 350,
        height: 200,
        backgroundColor: '#0C909C',
        opacity: 0.3
        
        
      },
      wrapper2: {
        marginTop:-20,
        margin:32
      },
      TextStyle:{
        fontWeight: 'bold',
        color:'#132A93',
        left:22,
        marginTop:8,
        fontSize:16
    
      },
      TextStyle1:{
        fontWeight: 'bold',
        color:'blue',
        left:22,
        marginTop:8,
        fontSize:16
    
      },
     
    })