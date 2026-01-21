import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/otp';
import { SafeAreaView } from 'react-native-safe-area-context';

import { api } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OTPScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [otp_code, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp_code];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp_code.join('');
    if (otpString.length !== 6) {
      return Alert.alert('Error', 'OTP harus 6 digit');
    }

    try {
      const res = await api.post('/verify-otp', { email, otp_code: otpString });
      await AsyncStorage.setItem('token', res.data.token);
      navigation.reset({ index: 0, routes: [{ name: 'HomeTabs' }] });
    } catch (err) {
      Alert.alert('Error', err.response?.data?.message || 'OTP salah');
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('../assets/img/kemakmuran.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Verifikasi Kode OTP</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Kode OTP Anda telah dikirim ke alamat email{'\n'}
          s*********@gmail.com. Silakan cek inbox atau{'\n'}
          spam untuk melanjutkan proses verifikasi.
        </Text>

        {/* OTP Input */}
        <Text style={styles.label}>Masukkan 6 digit angka</Text>

        <View style={styles.otpContainer}>
          {otp_code.map((value, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={text => handleChange(text, index)}
            />
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity onPress={handleVerify} style={styles.buttonWrapper}>
          <LinearGradient
            colors={['#D11342', '#E9073F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Verifikasi</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Resend Text */}
        <Text style={styles.resendText}>
          Tidak menerima kode?
          <Text style={styles.resendLink}> Kirim ulang</Text>
        </Text>

        {/* Footer */}
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>
          Copyright 2025 PT Mitra Sendang Kemakmuran{'\n'}
          Version 1.0
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
