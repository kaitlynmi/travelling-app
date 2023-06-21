import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export const Title = ({ text }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.titleText}>{text}</Text>
  </View>
);

export const Subtitle = ({ text }) => (
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitleText}>{text}</Text>
  </View>
);

export const InputSubgroup = ({ label, value, onChangeText }) => (
  <View style={styles.inputSubgroup}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputBox}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  </View>
);

export const ActionButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export const ActionLink = ({ text, onPress }) => (
  <TouchableOpacity style={styles.loginLink} onPress={onPress}>
    <Text style={styles.linkText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  titleContainer: {
    width: '90%',
    marginBottom: 24,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    width: '90%',
    marginBottom: 24,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: '500',
  },
  inputSubgroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  inputBox: {
    fontSize: 16,
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
    color: 'white',
  },
  loginLink: {
    marginBottom: 8,
  },
  linkText: {
    fontSize: 16,
    color: '#2196F3',
  },
});
