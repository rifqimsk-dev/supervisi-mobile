import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/akun';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AkunScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      // Panggil API Laravel logout
      await api.post('/logout');
    } catch (err) {
      console.log('Logout API error:', err);
    }

    // Hapus token dari AsyncStorage
    await AsyncStorage.removeItem('token');

    // Tampilkan alert sukses (opsional)
    Alert.alert('Logout', 'Anda berhasil logout');

    // Reset navigation → arahkan ke Login
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={styles.screen}>
          {/* Header */}
          <LinearGradient
            colors={['#D11342', '#E9073F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.header}
          >
            <Text style={styles.headerText}>Akun</Text>
          </LinearGradient>
          <ScrollView style={styles.container}>
            {/* Bagian Avatar */}
            <View style={styles.profileContainer}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={require('../assets/img/avatar.png')} // ganti dengan gambar kamu
                  style={styles.avatar}
                />
                <View style={styles.cameraIcon}>
                  <Icon name="photo-camera" size={16} color="#fff" />
                </View>
              </View>

              <Text style={styles.nama}>Rifqi Rifaldi</Text>
              <Text style={styles.email}>rifqi@kemakmuran.com</Text>
            </View>

            {/* MENU LIST */}
            <View style={styles.menuBox}>
              <MenuItem icon="lock" label="Ubah Password" onPress={() => {}} />
              <MenuItem
                icon="help-outline"
                label="Help & Support"
                onPress={() => {}}
              />
              <MenuItem
                icon="update"
                label="Cek Pembaharuan"
                onPress={() => {}}
              />
              <MenuItem
                icon="info-outline"
                label="Tentang"
                onPress={() => {}}
              />
              <MenuItem icon="logout" label="Keluar" onPress={handleLogout} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const MenuItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuLeft}>
      <Icon name={icon} size={22} color="#444" />
      <Text style={styles.menuText}>{label}</Text>
    </View>

    <Icon name="chevron-right" size={24} color="#999" />
  </TouchableOpacity>
);

export default AkunScreen;
