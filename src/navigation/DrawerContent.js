import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import { DrawerContentScrollView , DrawrItem, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Drawer} from 'react-native-paper'
export function  DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView  {... props}> 
<View style={styles.drawercontent}>
<Drawer.Section style={styles.drawersection}>
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="home-outline"
            color={color}
            size={size} />
            )
        }
        label="Accueil"
        onPress={() => { props.navigation.navigate ('Home')}}
         />
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="account-outline"
            color={color}
            size={size} />
            )
        }
        label="Profil"
        onPress={() => { props.navigation.navigate ('Profile')}}
         />
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="history"
            color={color}
            size={size} />
            )
        }
        label="Historique Patient"
        onPress={() => { props.navigation.navigate ('Profile')}}
         />

            </Drawer.Section>
    
</View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.Exit}>
            <DrawerItem
            icon={({color, size}) => (
            <Icon 
            name="exit-to-app"
            color={color}
            size={size} />
            )
        }
        label="Déconnexion"
        onPress={() => { props.navigation.navigate ('Profile')}}
         />

            </Drawer.Section>
            </View>

    )
}

export default DrawerContent;
const styles = StyleSheet.create({

    Exit: {
       marginBottom: 15,
       borderTopWidth: 1

     },
    
    drawercontent: {
        flex: 1,
      },

    drawersection: {
        marginTop: 40,
        
 
      }


    })