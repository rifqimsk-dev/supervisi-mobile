import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/home';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
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
            <Text style={styles.headerText}>Dashboard</Text>
          </LinearGradient>

          {/* MAIN CONTENT */}
          <View style={styles.content}>
            {/* Card 1 – Welcome */}
            <View style={styles.cardWelcome}>
              <Text style={styles.title}>
                <Text style={styles.boldRed}>Supervisi </Text>Apps
              </Text>
              <Text style={styles.subtitle}>
                Selamat datang di aplikasi Supervisi
              </Text>
            </View>

            {/* Card Statistik */}
            {/* Hari ini */}
            <View style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: '#2A57D0' }]}>
                <Icon name="bar-chart" size={22} color="#fff" />
              </View>
              <View>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Kunjungan hari ini</Text>
              </View>
            </View>

            {/* Bulan ini */}
            <View style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: '#E67E22' }]}>
                <Icon name="bar-chart" size={22} color="#fff" />
              </View>
              <View>
                <Text style={styles.statNumber}>23</Text>
                <Text style={styles.statLabel}>Kunjungan bulan ini</Text>
              </View>
            </View>

            {/* Total */}
            <View style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: '#009966' }]}>
                <Icon name="bar-chart" size={22} color="#fff" />
              </View>
              <View>
                <Text style={styles.statNumber}>35</Text>
                <Text style={styles.statLabel}>Total kunjungan</Text>
              </View>
            </View>
          </View>

          {/* Floating Button */}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate('FormKunjungan')}
          >
            <View style={styles.fabInner}>
              <Icon name="add" size={22} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
