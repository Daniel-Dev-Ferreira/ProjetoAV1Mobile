import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/Screens/HomeScreen';
import DisciplineScreen from './src/Screens/DisciplineScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//const [userToken, setUserToken] = React.useState(null);

export default function App() {
  return (
    
    <NavigationContainer>
      
     {/* <Drawer.Navigator>
        <Drawer.Screen name="Home"  options={{ title: 'Home' }} component={HomeScreen} />
      </Drawer.Navigator> */}
     
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-home'
                      : 'ios-home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Discipline') {
              return (
                <Ionicons
                  name={focused ? 'ios-book' : 'ios-book'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home"  options={{ title: 'Home' }} component={HomeScreen} />
        <Tab.Screen name="Discipline"  options={{ title: 'Discipline' }} component={DisciplineScreen} />
  </Tab.Navigator>
 
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 30
  }
});
