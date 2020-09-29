import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CustomHeader({title, isHome, navigation}){
    return(
      <View style={{flexDirection: 'row', height: 50, padding: 10, marginTop: 15}}>
        {
          isHome?
  
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image style={{width: 30, height: 30, marginLeft: 5}} 
          source={require('../../assets/menu.png')} 
          resizeMode="contain" />
        </View>
        : 
         <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}
         onPress={() => navigation.goBack()}>
             <Image style={{width: 20, height: 20, marginLeft: 5}}
             source={require('../../assets/left-arrow.png')} />
         </TouchableOpacity>   
        }
        <View style={{flex: 1.5, justifyContent:'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>{title}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    )
  }

const StudentScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title= "Teacher Screen" isHome={false} navigation={navigation}/>
        <View style={styles.container}>

        <Text style={styles.text2}>Welcome Teacher</Text>
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center', marginBottom: 15}}>GRUPOU !</Text>

            <TouchableOpacity style={styles.btn} onPress= { () => navigation.navigate('ContentTeacher')}>
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress= { () => navigation.navigate('RegisterTeacher')}>
                <Text style={styles.text}>SING UP</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    
    },
    text2:{
        fontSize: 32,
        color: 'white',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center',
    },
    container:{
        backgroundColor: '#1E90FF',
        flex: 1
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
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    
})

export default StudentScreen;