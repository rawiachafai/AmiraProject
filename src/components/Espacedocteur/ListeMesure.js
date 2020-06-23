import React from 'react'
import { View,TouchableOpacity, TextInput,ScrollView, StyleSheet ,Image ,Button, Text, Linking, KeyboardAvoidingView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';

class ListeMesure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          widthArr: [80,80,80,80,110],
          tableData: [
            ['chafai', 'Rawia', '1-03-2020', '1-04-2020','25 Mesures'],
            ['chafai', 'olfa', '1-03-2020', '1-04-2020','27'],
            ['chafai', 'Rihab', '1-03-2020', '1-04-2020',,'20'],
            ['chafai', 'nessrine', '1-03-2020', '1-04-2020','4'],
            ['chafai', 'mayssa', '1-03-2020', '1-04-2020','5'],
            ['chafai', 'jihen', '1-03-2020', '1-04-2020','123'],
            ['chafai', 'Ridha', '1-03-2020', '1-04-2020','456'],
            ['chafai', 'Moez', '1-03-2020', '1-04-2020','23'],
            ['chafai', 'amel', '1-03-2020', '1-04-2020','25'],
            ['chafai', 'Bilel', '1-03-2020', '1-04-2020','25'],
           
         
          ]

          
        }
      }
     
    
  render() {
    
    const state = this.state;
    
    return (
      <KeyboardAvoidingView behavior= 'padding'>
        <View >
            <View style={styles.LogoView}>
            <Text  style={styles.LogoStyle}> MESURE </Text>

            </View>
        </View>

       <View style={styles.SectionStyle}>
       <Image source={require('../../assets/recherche.png')} style={styles.ImageStyle} />

               <TextInput
               placeholder="Rechercher"
              
               underlineColorAndroid="transparent"
               />
     </View>
     <ScrollView horizontal={false}>
          <View>
          <Table>
            {
            <ScrollView style={styles.dataWrapper}>
             
                {
                 state.tableData.map((rowData, index) => (
                   <TouchableOpacity>
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F8F9F9'}]}
                      textStyle={styles.text1} 
                      
                    />
                    </TouchableOpacity>
                  ))
                }
             
            </ScrollView>}
            </Table>
          </View>
    </ScrollView>
    
</KeyboardAvoidingView>
                  )}}

export default ListeMesure
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

container: 
{ flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#49B7C1' },
  text: { textAlign: 'center', fontWeight: '100',color: 'white' },
  text1: { textAlign: 'center', fontWeight: '100' ,color:'#717070'},
  dataWrapper: { marginTop: -1 },
  row: { height: 80, backgroundColor: '#DCF9FC' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
})
 