import React from 'react'
import { View,TouchableOpacity, TextInput,ScrollView, StyleSheet ,Image ,Button, Text, Linking, KeyboardAvoidingView} from 'react-native'
import { Table, TableWrapper, Row } from 'react-native-table-component';
class ListePatient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          width: 110,
          widthArr: [ 90,90,140,100],
          tableData: [
            ['Chafai', 'Rawia', 'rawiya@gmail.com', 'femme'],
            ['Nouigues', 'Amira', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Olfa', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rihab', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rawia', 'rawiya@gmail.com', 'femme'],
            ['Nouigues', 'Amira', 'rawiya@gmail.com', 'femme'],
            ['chafai', 'olfa', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rawia', 'rawiya@gmail.com', 'femme'],
            ['Nouigues', 'Amira', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Olfa', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rihab', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rawia', 'rawiya@gmail.com', 'femme'],
            ['Nouigues', 'Amira', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rawia', 'rawiya@gmail.com', 'femme'],
            ['Nouigues', 'Amira', 'rawiya@gmail.com', 'femme'],
            ['chafai', 'olfa', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rawia', 'rawiya@gmail.com', 'femme'],
            ['Nouigues', 'Amira', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Olfa', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rihab', 'rawiya@gmail.com', 'femme'],
            ['Chafai', 'Rawia', 'rawiya@gmail.com', 'femme'],
            ['Nouigues', 'Amira', 'rawiya@gmail.com', 'femme'],
           
         
          ]

          
        }
      }
     
    
  render() {
    
    const state = this.state;
    const width = `${100 / parseInt(this.state.width / 400)}%`;
    
    return (
      <KeyboardAvoidingView behavior= 'padding'>
        <View >
            <View style={styles.LogoView}>
            <Text  style={styles.LogoStyle}> COAGCARE </Text>

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
                  )}
                  onLayout(e) {
                    if (this.state.width !== e.nativeEvent.layout.width) {
                      this.setState({
                        width: e.nativeEvent.layout.width
                      })
                    }
                  }   
                
                }

export default ListePatient
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
  row: { height: 80, backgroundColor: '#EAEAEA' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
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
    height: 450,
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

  }
})
 