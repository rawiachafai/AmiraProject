import React from 'react'
import { View, TextInput, StyleSheet ,Image ,Button, Text ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Table, TableWrapper, Row } from 'react-native-table-component';
class Notification extends React.Component {
  render() {
return (
<View style={{flex:1, backgroundColor: '#FFFFFF'}}>
   
<View style={{flexDirection: 'row', paddingTop: 50 }}> 
    <TouchableOpacity  style={styles.TouchabilityStyle}>
    <Icon name="current-ac" color='#FFFFFF'size={45}  style={styles.ImageStyle1}/>    
    <Text style={{ left:2 , margin: -10 ,  fontSize: 14 , color: '#A9A9A9' }}>   MESURES </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.TouchabilityStyle}>
    <Icon name="chart-histogram" color='#FFFFFF'size={45} style={styles.ImageStyle1}  />    
    <Text style={{left:2 , margin: -10,  fontSize: 14 , color: '#A9A9A9'}}>  SYNTHESE </Text>
    </TouchableOpacity>
    </View>
    <View style={{  paddingTop: 130}}>
      <Image source={require('../../assets/2.jpg')} 
      style={{height: 200,width: 400, left: 10,opacity:1.5, resizeMode : 'stretch',
      alignItems: 'center'}} />
      </View>
     
                  <TouchableOpacity style={styles.LogoView} >
                         <Text style={{color:'#FFFFFF', fontWeight: 'bold',left:-70}}> Processus De Mesure  </Text>

                  </TouchableOpacity>
                  
    <View>

    </View>
    </View>
    
    
    )
  }
}

export default Notification
const styles = StyleSheet.create({
  ImageStyle: {
    padding: 7,
    margin: 60,
  
  },
  ImageStyle1: {
    padding: 2,
    margin: 6,
  },
  TouchabilityStyle:{
    height: 60,
    width: 60,
     borderRadius:40,
     backgroundColor:'#49B7C1',
     margin:70,

  },
  LogoView:{
    height:40, 
    backgroundColor: '#49B7C1', 
    alignItems: 'center',
    justifyContent: 'center',
    margin:-34,
    opacity:0.5
  } 
 
 
 
})


