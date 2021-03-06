import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TeacherScreen from './TeacherScreen';
import StudentScreen from './StudentScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
import TeacherRegisterScreen from './TeacherRegisterScreen';

import ContentStudent from './ContentStudentScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Teacher"  options={{ title: 'Teacher Page' }} component={TeacherScreen}/>
                <Stack.Screen name="Student"  options={{ title: 'Student Page' }} component={StudentScreen}/>
                <Stack.Screen name="Profile"  options={{ title: 'Initial Page' }} component={ProfileScreen}/>
                <Stack.Screen name="Register"  options={{ title: 'Student Page' }} component={RegisterScreen}/>
                <Stack.Screen name="TeacherRegister"  options={{ title: 'Teacher Page' }} component={TeacherRegisterScreen}/>
                <Stack.Screen name="ContentStudent"  options={{ title: 'Student Page' }} component={ContentStudent}/>
            </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }, 
})

export default HomeScreen;