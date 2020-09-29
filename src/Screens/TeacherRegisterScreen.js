import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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

const TeacherRegisterScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title= "Register Page" isHome={false} navigation={navigation}/>
        <ScrollView style={styles.scroll}>
            <View style={styles.card}>
                <View style={styles.card_header}>
                    <Text style={{color: 'white', fontSize: 20}}>Form Teacher</Text>
                </View>
                <View style={styles.card_body}>
                    <Text style={styles.textInput}>Name:</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.textInput}>E-mail:</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.textInput}>CPF:</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.textInput}>Password:</Text>
                    <TextInput style={styles.input} /> 
                </View>
                <View style={styles.card_buttom}>
                <TouchableOpacity style={styles.btn}>
                        <Text style={{color: 'white'}}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        height: 40,
        width: '90%',
        marginLeft: 15,
        backgroundColor: 'white'
    },
    textInput: {
        marginLeft: 20,
        fontSize: 15,
        color: 'white',
        paddingTop: 10,
        marginBottom: 5
    },
    btn:{
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 90,
        backgroundColor: '#FFA500'
    },
    scroll:{
        backgroundColor: '#1E90FF',
    },
    card: {
        backgroundColor: '#1E90FF',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    card_header: {
        backgroundColor: '#B0C4DE',
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12
    },
    card_body: {
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 20
    }, 
    card_buttom: {
        backgroundColor: '#B0C4DE',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderTopColor: 'rgba(0, 0, 0, 0.6)',
        borderTopWidth: 1,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        display: 'flex',
        flexDirection: 'row',
    }

})

export default TeacherRegisterScreen;