import React from 'react'
import { View, TextInput, StyleSheet ,Image ,Button, Text ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Espacedocteur extends React.Component {
  render() {
return (
<View style={{ flex: 1 ,backgroundColor: '#FFFFFF'}}>
    <View style={{ backgroundColor: 'red', paddingTop:-10 }}>
    <View style={styles.LogoView}>
    <Text  style={styles.LogoStyle}> GOAGCARE </Text>
    </View>
    </View>
    <View style={{ flexDirection: 'row', paddingTop: 50 }}>
    <TouchableOpacity>
    <Icon name="home-outline" style={styles.ImageStyle} />    
    <Text style={{ left: 83 , margin: -50 , height: 200, fontSize: 16 , color: '#A9A9A9' }}>  Ajouter Patient </Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('../../assets/personnes.jpg')} style={styles.ImageStyle} />
    <Text style={{ left: 65 , margin: -50 , height: 200, fontSize: 16 , color: '#A9A9A9'}}>  Liste Des Patients </Text>
    </TouchableOpacity>
    </View>
    <View>
    </View>
    </View>
    
    )
  }
}

export default Espacedocteur
const styles = StyleSheet.create({
  ImageStyle: {
      padding: 10,
      margin: 60,
      height: 75,
      width: 85,
      resizeMode : 'stretch',
      alignItems: 'center'

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


