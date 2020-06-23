import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import { DrawerContentScrollView , DrawrItem, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Drawer} from 'react-native-paper'
export function  DrawerContent(props) {
    return(
<View style={{flex:1}}>
               <View style={{ backgroundColor: '#E9F2FA'}}>
               <View style={styles.LogoView}>
                         
                  </View>
                  </View>
            <DrawerContentScrollView  {... props}> 
<View style={styles.drawercontent}>
<Drawer.Section style={styles.drawersection}>
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="home-outline"
            color="#49B7C1"
            size={size} />
            )
        }
        label="ACCUEIL" labelStyle={{
            color:"#49B7C1"
        }}
        onPress={() => { props.navigation.navigate ('Home')}}
         />
         </Drawer.Section>
         <Drawer.Section style={styles.drawersection}>
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="account-outline"
            color="#49B7C1"
            size={size} />
            )
        }
        label="PROFIL" labelStyle={{
            color:"#49B7C1"
        }}
        onPress={() => { props.navigation.navigate ('Profile')}}
         />
         </Drawer.Section>
         <Drawer.Section style={styles.drawersection}>
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="settings-outline"
            color="#49B7C1"
            size={size} />
            )
        }
        label="PARAMETRES" labelStyle={{
            color:"#49B7C1"
        }}
        onPress={() => { props.navigation.navigate ('Home')}}
         />
         </Drawer.Section>     
         <Drawer.Section style={styles.drawersection}>
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="history"
            color="#49B7C1"
            size={size} />
            )
        }
        label="HISTORIQUE PATIENT" labelStyle={{
            color:"#49B7C1"
        }}
        onPress={() => { props.navigation.navigate ('Profile')}}
         />
         </Drawer.Section>
         <Drawer.Section style={styles.drawersection}>
         <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="bluetooth"
            color="#49B7C1"
            size={size} />
            )
        }
        label="CONFIGURATION BLUETOOTH" labelStyle={{
            color:"#49B7C1"
        }}
        onPress={() => { props.navigation.navigate ('Profile')}}
         />
         </Drawer.Section>
         <Drawer.Section style={styles.drawersection}>
            <DrawerItem 
            icon={({color, size}) => (
            <Icon 
            name="exit-to-app"
            color="#49B7C1"
            size={size} />
            )
        }
        label="DECONNEXION" labelStyle={{
            color:"#49B7C1"
        }}
        onPress={() => { props.navigation.navigate ('Profile')}}
         />

            </Drawer.Section>
    
</View>
            </DrawerContentScrollView>
            
            </View>

    )
}

export default DrawerContent;
const styles = StyleSheet.create({

    
    drawercontent: {
        flex: 1,
        paddingTop:12
        
    
      },

    drawersection: {
        margin:5
     
      },
      LogoView:{
        height:80, 
        backgroundColor: '#49B7C1', 
        alignItems: 'center',
        justifyContent: 'center'
      }  
    
    })