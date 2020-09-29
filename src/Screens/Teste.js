import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Teste = () => {
    return (
        <View>
            <Text style={styles.text}>Teste Screen</Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    
})

export default Teste;