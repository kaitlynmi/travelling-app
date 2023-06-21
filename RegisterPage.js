import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {
    useFonts,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans';
import {
    Title,
    Subtitle,
    InputFieldBox,
    ActionButton,
    ActionLink,
    InputFieldWithIcon
} from './Components';
// import your icon library here (example: react-native-vector-icons)
// import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterPage = ({ onLoginLinkClick }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // implement validation checks and use these states to update icon
    // const [usernameValid, setUsernameValid] = useState(false);
    // const [passwordValid, setPasswordValid] = useState(false);

    let [fontsLoaded] = useFonts({
        PlusJakartaSans_400Regular,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        PlusJakartaSans_700Bold,
    });

    const handleSignupClick = () => {
        Alert.alert('Button pressed', 'You pressed the Signup button');
   };

    const handleLoginLinkClick = () => {
        // Alert.alert('Button pressed', 'You pressed the Login link');
        onLoginLinkClick();
    };

    const isUsernameValid = () => {
        return username.length >= 5;
    }

    const isPasswordValid = () => {
        return password.length >= 5;
    }

    if (!fontsLoaded) {
        return (<View>
            <Text>Loading Fonts...</Text>
        </View>);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contextGroup}>
                <Title text="Sign up"></Title>
            </View>

            <View style={styles.inputGroup}>
                <InputFieldWithIcon
                    label={"Username:"}
                    onChangeText={setUsername}
                    value={username}
                    isValid={isUsernameValid}
                ></InputFieldWithIcon>

                <InputFieldWithIcon
                    label={"Password:"}
                    onChangeText={setPassword}
                    value={password}
                    isValid={isPasswordValid}
                ></InputFieldWithIcon>

            </View>
            <View style={styles.actionGroup}>
                <ActionButton
                        text={"Sign Up"}
                        onPress={handleSignupClick}></ActionButton>

                <ActionLink
                        text={"Already have an account? Log in now!"}
                        onPress={handleLoginLinkClick}></ActionLink>
                
        
            </View>
        </View>
    );
}

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
        // height: 70,
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


export default RegisterPage;
