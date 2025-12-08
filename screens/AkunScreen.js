import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/akun';
import { SafeAreaView } from 'react-native-safe-area-context';

const AkunScreen = ({ navigation }) => {
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
              <MenuItem icon="lock" label="Ubah Password" />
              <MenuItem icon="help-outline" label="Help & Support" />
              <MenuItem icon="update" label="Cek Pembaharuan" />
              <MenuItem icon="info-outline" label="Tentang" />
              <MenuItem icon="logout" label="Keluar" />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <Icon name={icon} size={22} color="#444" />
      <Text style={styles.menuText}>{label}</Text>
    </View>

    <Icon name="chevron-right" size={24} color="#999" />
  </TouchableOpacity>
);

export default AkunScreen;
