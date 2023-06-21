import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFonts, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import { Ionicons } from '@expo/vector-icons';

export const Title = ({ text }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.title}>{text}</Text>
    </View>
);

export const Subtitle = ({ text }) => (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{text}</Text>
    </View>
);

export const InputFieldBox = ({ label, value, onChangeText, secureTextEntry, children }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
            style={styles.inputBox}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
        {children}
    </View>
);

export const InputFieldWithIcon = ({ label, value, onChangeText, secureTextEntry, isValid }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputBoxContainer}>
        <TextInput
          style={styles.inputBox2}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {isValid() ? <Ionicons name={"checkmark"} size={24} color={"green"} style={styles.icon} /> :
        <Ionicons name={"close"} size={24} color={"red"} style={styles.icon} />}
      </View>
    </View>
  );

export const ActionButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

export const ActionLink = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'PlusJakartaSans_400Regular',
    },
    titleContainer: {
    },
    title: {
        fontSize: 32,
        fontFamily: 'PlusJakartaSans_600SemiBold',
    },
    subtitleContainer: {
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'PlusJakartaSans_500Medium',
    },
    inputContainer: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSans_400Regular',
    },
    inputBox: {
        marginTop: 4,
        fontSize: 16,
        fontFamily: 'PlusJakartaSans_500Medium',
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
    },
    inputBoxContainer: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingRight: 8,
      },
      inputBox2: {
        flex: 1,
        borderRadius: 8,
        borderWidth: 0,
        borderColor: 'transparent',
        padding: 8,
        fontSize: 16,
        fontFamily: 'PlusJakartaSans_500Medium',
      },
      icon: {
        marginLeft: 8,
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
    linkText: {
        fontSize: 16,
    },
    
});
