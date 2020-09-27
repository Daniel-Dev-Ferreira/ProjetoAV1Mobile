import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const StudentScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Student Screen</Text>
            <Button title="Logar" />
            <Text></Text>
            <Button title="Cadastrar" 
            onPress= { () => navigation.navigate('Register')} />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    
})

export default StudentScreen;