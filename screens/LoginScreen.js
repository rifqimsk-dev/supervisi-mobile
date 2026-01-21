import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/login';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { api } from '../utils/api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await api.post('/login', { email, password });
      Alert.alert('Sukses', res.data.message);
      navigation.navigate('OTP', { email }); // kirim email ke OTP screen
    } catch (err) {
      Alert.alert('Error', err.response?.data?.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

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
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleLogin}
        disabled={loading}
        style={[styles.buttonWrapper, loading && { opacity: 0.7 }]}
      >
        <LinearGradient
          colors={['#D11342', '#E9073F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Icon name="login" size={24} color="#fff" />
              <Text style={styles.buttonText}>Login</Text>
            </>
          )}
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
