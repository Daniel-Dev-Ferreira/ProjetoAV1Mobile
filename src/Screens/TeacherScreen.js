import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TeacherScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Teacher Screen</Text>
            <Button title="Logar" />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})

export default TeacherScreen;