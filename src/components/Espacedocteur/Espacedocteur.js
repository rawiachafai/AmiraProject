import React from 'react'
import { View, TextInput, StyleSheet ,Image ,Button, Text ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Espacedocteur extends React.Component {
  render() {
return (
<View style={{ flex:1,backgroundColor: '#FFFFFF'}}>
    <View style={{ backgroundColor: 'red', paddingTop:-10 }}>
    <View style={styles.LogoView}>
    <Text  style={styles.LogoStyle}> GOAGCARE </Text>
    </View>
    </View>
    <View style={{ paddingTop: 50 }}>
    <TouchableOpacity style={{marginTop:-45}}>
    <Icon name="account-multiple-plus" color='#19A1AC'size={60} style={styles.ImageStyle} />    
    <Text style={{ left: 249 , margin: -100 , height: 200, fontSize: 14 , color: '#A9A9A9' }}>  Ajouter Patient </Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
    <Icon name="account-group" color='#19A1AC'size={60} style={styles.ImageStyle} />    
    <Text style={{ left: 245 , margin: -100 , height: 200, fontSize: 14 , color: '#A9A9A9'}}>  Liste Des Patients </Text>
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
      margin: 100,
      left:68,

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


