
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';




function CustomHeader({title, isHome, navigation}){
    return(
      <View style={{flexDirection: 'row', height: 70, marginTop: 15}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
        {
          isHome?
  
          <TouchableOpacity onPress={ () => navigation.openDrawer()}>
          <Image style={{width: 30, height: 30, marginLeft: 5}} 
          source={require('../../assets/menu.png')} 
          resizeMode="contain" />
          </TouchableOpacity>
          : 
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}
           onPress={() => navigation.goBack()}>
               <Image style={{width: 20, height: 20, marginLeft: 5}}
               source={require('../../assets/left-arrow.png')} />
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

  function ContentTeacher({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title= "Content Teacher" isHome={true} navigation={navigation}/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E90FF'}}>
          <Text style={styles.text}>Content Teacher</Text>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
      text:{
          fontSize: 30,
          color: 'white'
      }
  })
  export default ContentTeacher;

