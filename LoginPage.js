import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFonts, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';

const LoginPageMinimal = ({ onRegisterLinkClick }) => {
    let [fontsLoaded] = useFonts({
        PlusJakartaSans_400Regular,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        PlusJakartaSans_700Bold,
    });

    const handleRegisterLinkClick = () => {
        // Alert.alert('Button pressed', 'You pressed the Register button');
        onRegisterLinkClick();
    };


    if (!fontsLoaded) {
        return <View />;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.contextGroup}>
                    <Text style={[styles.text, styles.title]}>Log In</Text>
                    <Text style={[styles.text, styles.subtitle]}>to explore trending routes</Text>
                </View>

                <View style={styles.inputGroup}>
                    <View style={styles.inputSubGroup}>
                        <Text style={[styles.text, styles.inputName]}>Username:</Text>
                        <TextInput style={styles.inputBox} />
                    </View>

                    <View style={styles.inputSubGroup}>
                        <Text style={[styles.text, styles.inputName]}>Password:</Text>
                        <TextInput style={styles.inputBox} secureTextEntry={true} />
                    </View>
                </View>

                <View style={styles.actionGroup}>
                    <TouchableOpacity
                        onPress={() => Alert.alert('Button pressed', 'You pressed the Login button')}
                        // onPress={() => navigation.navigate('HomePage')}
                        style={styles.button}>
                        <Text style={[styles.text, styles.buttonText]}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleRegisterLinkClick}>
                        <Text style={styles.registerLink}>Register now</Text>
                    </TouchableOpacity>
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
    text: {
        fontFamily: 'PlusJakartaSans_400Regular',
    },
    contextGroup: {
        width: '90%',
        marginBottom: 24,
    },
    title: {
        fontSize: 32,
        fontFamily: 'PlusJakartaSans_600SemiBold',
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'PlusJakartaSans_500Medium',
    },
    inputGroup: {
        width: '90%',
        marginBottom: 24,
    },
    inputSubGroup: {
        marginBottom: 16,
    },
    inputName: {
        fontSize: 16,
    },
    inputBox: {
        marginTop: 4,
        fontSize: 16,
        fontFamily: 'PlusJakartaSans_500Medium',
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
    },
    actionGroup: {
        width: '90%',
        marginBottom: 16,
        alignItems: 'flex-end',
    },
    button: {
        width: '100%',
        backgroundColor: '#2196F3',
        borderRadius: 8,
        marginBottom: 8,
        padding: 12,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans_700Bold',
        color: 'white',
    },
    registerLink: {
        fontSize: 16,
    },
});

export default LoginPageMinimal;
