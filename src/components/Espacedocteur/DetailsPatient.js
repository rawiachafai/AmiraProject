import React from 'react';
import {StyleSheet,Image, ImageBackground ,View, ScrollView ,Text,Button } from 'react-native';
class DetailsPatient extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      width: 110
    };
  }

  render() {
    //width of child is 110
    const width = `${100 / parseInt(this.state.width / 400)}%`;
    return (
        <View>
           
        <View style={styles.container} onLayout={this.onLayout.bind(this)}>
        <Image style= { styles.backgroundImage } 
       source={require('../../assets/fiche.jpg')} style={styles.image}></Image>
   
         
          <View style={[styles.wrapper, { width: width }]}>

            <View style={styles.box}>
                <Text style={styles.TextStyle}> FICHE PATIENT RAWIA CHAFAI</Text>
                <Text style={styles.ContinusStyle}> Date Naissance : </Text>
                <Text style={styles.ContinusStyle}> E-mail : </Text>
                <Text style={styles.ContinusStyle}> Sexe : </Text>
                <Text style={styles.ContinusStyle}> Poids : </Text>
                <Text style={styles.ContinusStyle}> Taille : </Text>
                <Text style={styles.ContinusStyle}> Pathologie : </Text>
                <Text style={styles.ContinusStyle}> DateDerniereMesure : </Text>
                <Text style={styles.ContinusStyle}> ValeurDerniereMesure : </Text>
                
          
            </View>
          </View>
        </View>
        <View style={styles.ButtonStyle}>
        <Button color="#FE8C98"  title=" Supprimer  " onPress={this.Clear}  large></Button>
        </View>
        </View>
    );
  }

  onLayout(e) {
    if (this.state.width !== e.nativeEvent.layout.width) {
      this.setState({
        width: e.nativeEvent.layout.width
      })
    }
  }
}
export default DetailsPatient
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 80,
    opacity: 0.5
  },
  box: {
    width: 350,
    height: 500,
    backgroundColor: '#7AD5DE',
    opacity: 0.5
    
  },
  wrapper: {
    marginVertical: 18, alignItems: 'center'
  },
  TextStyle:{
    fontWeight: 'bold',
    color:'#23818A',
    left:44,
    marginTop:8

  },
  ContinusStyle:{
    
    color:'#000606',
    fontWeight: 'bold',
    left:25,
    margin: 14

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
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.7,
    height:700,
    width:800

   
   
  },
  ButtonStyle:{
    marginTop: 450,
    width : 120,
    height : 50 , 
    left : 66 ,
    margin :70,
   opacity:0.7

  },
});