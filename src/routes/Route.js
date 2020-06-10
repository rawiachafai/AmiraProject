import React from 'react'
import Authentifier from '../components/Authentifier'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

class Route extends React.Component {
  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AuthentifierScreen}
          options={{
          title: 'CoagCare',
          headerStyle: {
          backgroundColor: 'skyblue',
            },
          headerTitleStyle: {
          fontWeight: 'bold',
            },
            headerTintColor: '#fff',
          }}
        />
        </Stack.Navigator>
        </NavigationContainer>
)
}}
export default Route
function AuthentifierScreen({ navigation }) {
  return (
  <Authentifier />

  );
}