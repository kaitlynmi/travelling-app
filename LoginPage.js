import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFonts, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import {
    Title,
    Subtitle,
    InputFieldBox,
    ActionButton,
    ActionLink,
  } from './Components';

const LoginPageMinimal = ({ onRegisterLinkClick }) => {
    let [fontsLoaded] = useFonts({
        PlusJakartaSans_400Regular,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        PlusJakartaSans_700Bold,
    });

    const handleLoginClick = () => {
         Alert.alert('Button pressed', 'You pressed the Login button');
    };

    const handleRegisterLinkClick = () => {
        // Alert.alert('Button pressed', 'You pressed the Register button');
        onRegisterLinkClick();
    };


    if (!fontsLoaded) {
        return <View>
            <Text>Loading Font...</Text>
        </View>;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.contextGroup}>
                    <Title text="Log In"></Title>
                    <Subtitle text = "to explore trending routes"></Subtitle>
                </View>

                <View style={styles.inputGroup}>
                    <InputFieldBox
                    label={"Username:"}></InputFieldBox>

                    <InputFieldBox
                    label={"Password:"}
                    secureTextEntry={true}></InputFieldBox>
                </View>

                <View style={styles.actionGroup}>
                    <ActionButton
                        text={"Log In"}
                        onPress={handleLoginClick}></ActionButton>

                    <ActionLink
                        text={"Register now"}
                        onPress={handleRegisterLinkClick}></ActionLink>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contextGroup: {
        width: '90%',
        marginBottom: 24,
        
    },
    inputGroup: {
        width: '90%',
        marginBottom: 24,
    },
    actionGroup: {
        width: '90%',
        marginBottom: 16,
        alignItems: 'flex-end',
    },
});

export default LoginPageMinimal;
