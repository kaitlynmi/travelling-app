import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
    useFonts,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans';

const Title = ({ text }) => {
    return <Text style={styles.title}>{text}</Text>;
};

const Subtitle = ({ text }) => {
    return <Text style={styles.subtitle}>{text}</Text>;
};

const InputSubGroup = ({ label, children }) => {
    return (
        <View style={styles.inputSubgroup}>
            <Text style={[styles.text, styles.label]}>{label}</Text>
            {children}
        </View>
    );
};

const InputField = ({ }) => {
    return (
        <TextInput style={styles.inputBox} />
    );
};

const ActionButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const ActionLink = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={styles.loginLink} onPress={onPress}>
            <Text style={styles.linkText}>{children}</Text>
        </TouchableOpacity>
    );
};

const MinimalComponents = {
    Title,
    Subtitle,
    InputSubGroup,
    InputField, 
    ActionButton,
    ActionLink,
};

export default MinimalComponents;

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontFamily: 'PlusJakartaSans_600SemiBold',
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'PlusJakartaSans_500Medium',
    },
    inputSubgroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
        fontFamily: 'PlusJakartaSans_400Regular',
    },
    inputBox: {
        // marginTop: 4,
        fontSize: 16,
        fontFamily: 'PlusJakartaSans_500Medium',
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
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
    loginLink: {
        marginBottom: 8,
    },
    linkText: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans_400Regular',
        color: '#2196F3',
    },
});
