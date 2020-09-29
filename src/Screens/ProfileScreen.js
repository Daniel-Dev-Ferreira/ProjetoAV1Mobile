import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function CustomHeader({title, isHome, navigation}){
    return(
      <View style={{flexDirection: 'row', height: 70}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        {
          isHome?
  
          <TouchableOpacity onPress={ () => navigation.openDrawer()}>
          <Image style={{width: 30, height: 30, marginLeft: 5}} 
          source={require('../../assets/menu.png')} 
          resizeMode="contain" />
          </TouchableOpacity>
          : 
          <Text></Text>
        }
        </View>
        <View style={{flex: 1.5, justifyContent:'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>{title}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    )
  }

  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

const ProfileScreen = ( { navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title= "Home" isHome={false} navigation={navigation}/>
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/logo.jpeg')} />
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

            <Text style={styles.textEnd}>From</Text>
            <Text style={styles.textEnd2}>Unicarioca</Text>
        </View>
        </SafeAreaView>
    )
};

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

export default ProfileScreen;