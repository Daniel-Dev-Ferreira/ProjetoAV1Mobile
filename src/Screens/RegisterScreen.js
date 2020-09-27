import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const RegisterScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Register Student</Text>
            <Text style={styles.textInput}>Nome:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.textInput}>E-mail:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.textInput}>Matrícula:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.textInput}>Senha:</Text>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'white'}}>Cadastar</Text>
            </TouchableOpacity>
        </View>
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
        width: '75%',
        marginLeft: 10,
    },
    textInput: {
        marginLeft: 15
    },
    btn:{
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'blue',
        width: '50%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 100
    },

})

export default RegisterScreen;