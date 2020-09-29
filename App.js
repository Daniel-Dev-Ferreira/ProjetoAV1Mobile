import * as React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, Button, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import TeacherScreen from './src/Screens/TeacherScreen';
import StudentScreen from './src/Screens/StudentScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContentStudent from './src/Screens/ContentStudentScreen';
import TeacherRegisterScreen from './src/Screens/TeacherRegisterScreen';
import ContentTeacher from './src/Screens/ContentTeacher';
import UpdateData from './src/Screens/UpdateDada';
import { ScrollView } from 'react-native-gesture-handler';


function CustomHeader({title, isHome, navigation}){
  return(
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
      {
        isHome?

        <TouchableOpacity onPress={ () => navigation.openDrawer()}>
        <Image style={{width: 30, height: 30, marginLeft: 5}} 
        source={require('./assets/menu.png')} 
        resizeMode="contain" />
        </TouchableOpacity>
        : 
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}
         onPress={() => navigation.goBack()}>
             <Image style={{width: 20, height: 20, marginLeft: 5}}
             source={require('./assets/left-arrow.png')} />
         </TouchableOpacity> 
      }
      </View>
      <View style={{flex: 1.5, justifyContent:'center'}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text></Text>
        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Teacher')}>
                <FontAwesome5 style={styles.icon} name="chalkboard-teacher" size={24} color="black">
                    <Text>  </Text>
                    <Text style={styles.text}>Teacher</Text>
                </FontAwesome5>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={ () => navigation.navigate('Student')}> 
                <Entypo style={styles.icon}  name="user" size={24} color="black">
                    <Text>  </Text>
                    <Text style={styles.text}>Student</Text>
                </Entypo>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title= "Senttings" isHome={false} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Senttings!</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawer(props){
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFA500'}}>
        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./assets/profile.png')}
          style={{height: 120, width: 120, borderRadius: 60}} />
        </View>
        <ScrollView style={{marginLeft: 5}}>
          <TouchableOpacity 
          style={{marginTop: 20}}
          onPress={ () => props.navigation.navigate('Menu')}>
            <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{marginTop: 20}}
          onPress={ () => props.navigation.navigate('Update Dada')}>
            <Text>Upadate Date</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
  )
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function TabNavigator(){
  return(
    <Tab.Navigator initialRouteName="Sair"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Sair') {
                    iconName = focused
                      ? 'ios-exit'
                      : 'ios-exit';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-build' : 'ios-build';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}>
        <Tab.Screen name="Sair" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  )
}

function HomeStack (){
  return(
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Teacher"  options={navOptionHandler} component={TeacherScreen}/>
      <Stack.Screen name="Student"  options={navOptionHandler} component={StudentScreen}/>
      <Stack.Screen name="Profile"  options={navOptionHandler} component={ProfileScreen}/>
      <Stack.Screen name="Register"  options={navOptionHandler} component={RegisterScreen}/>
      <Stack.Screen name="RegisterTeacher"  options={navOptionHandler} component={TeacherRegisterScreen}/>
      <Stack.Screen name="ContentStudent"  options={navOptionHandler} component={ContentStudent}/>
      <Stack.Screen name="ContentTeacher"  options={navOptionHandler} component={ContentTeacher}/>
      <Stack.Screen name="TeacherRegister"  options={navOptionHandler} component={TeacherRegisterScreen}/>
      <Stack.Screen name="Home"  options={navOptionHandler} component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomDrawer(props)} >
        <Drawer.Screen name="Menu" component={TabNavigator} />
        <Drawer.Screen name="Update Dada" component={UpdateData} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#1E90FF',
      flex: 1
  },
  text: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
  },
  btn:{
      marginTop: 10,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FF1493',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 105
  },
  btn2: {
      marginTop: 10,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FFA500',
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 105
  },
  img:{
      height: 160,
      width: '75%',
      marginBottom: 20,
      marginTop: 40,
      marginLeft: 50,
      borderWidth: 2,
      borderColor: 'black'
  },
  icon: {
      marginRight: 20
  },
  textEnd:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 50,
      color: 'white'
  },
  textEnd2:{
      fontSize: 20,
      textAlign: 'center',
      marginTop: 5,
      color: 'white'
  }
})
