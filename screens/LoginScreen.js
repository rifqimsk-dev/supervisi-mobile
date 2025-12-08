import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/login';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/img/kemakmuran.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>
        <Text style={styles.titleBold}>Supervisi </Text>
        Apps
      </Text>

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        style={styles.input}
        placeholderTextColor="#999"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />

      {/* Login Button */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('OTP')}
        style={styles.buttonWrapper}
      >
        <LinearGradient
          colors={['#D11342', '#E9073F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Icon name="login" size={24} color="#fff" />
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>
        Copyright 2025 PT Mitra Sendang Kemakmuran{'\n'}
        Version 1.0
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
