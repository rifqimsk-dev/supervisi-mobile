import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/kunjungan';
import { SafeAreaView } from 'react-native-safe-area-context';

const KunjunganScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.screen}>
        {/* Header */}
        <LinearGradient
          colors={['#D11342', '#E9073F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <Text style={styles.headerText}>Data Kunjungan</Text>
          {/* Floating Button */}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => navigation.navigate('FormKunjungan')}
          >
            <Icon name="add" size={22} color="#E9073F" />
          </TouchableOpacity>
        </LinearGradient>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* SECTION: HARI INI */}
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Icon name="calendar-today" size={18} color="#444" />
              <Text style={styles.sectionText}>
                Hari ini: Jum’at, 05 Desember 2025
              </Text>
            </View>

            {/* CARD HARI INI */}
            <View style={styles.todayCard}>
              <Image
                source={require('../assets/img/mps_panimbang.webp')} // ganti dengan gambar kamu
                style={styles.todayImage}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.todayName}>MPS Panimbang</Text>
                <Text style={styles.todayDesc}>Monitoring temuan dealer</Text>
                <Text style={styles.todayAddress}>
                  Jl. Raya Panimbang, Sidamukti, Kec. Sukaresmi, Kabupaten
                  Pandeglang, Banten 42265
                </Text>
              </View>
            </View>
          </View>

          {/* SECTION BULAN INI */}
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Icon name="calendar-month" size={18} color="#444" />
              <Text style={styles.sectionText}>Bulan Ini, Desember 2025</Text>
            </View>

            {/* CARD LIST */}
            {[
              {
                name: 'MPS Pandeglang',
                address:
                  'Jl. Jenderal Ahmad Yani No.188, Pandeglang, Kec. Pandeglang, Kabupaten Pandeglang, Banten 42213',
                date: '01',
                day: 'Kamis, 01 Desember 2025',
              },
              {
                name: 'MPS Labuan',
                address:
                  'Jl. Jend. Ahmad Yani No.15 Blok A14, Labuan, Kec. Labuan, Kabupaten Pandeglang, Banten 42264',
                date: '02',
                day: 'Kamis, 02 Desember 2025',
              },
              {
                name: 'Honda MSK Retail Cab. Ciceri',
                address:
                  'Jl. Jend. Sudirman No.11, Sumurpecung, Kec. Serang, Kota Serang, Banten 42118',
                date: '03',
                day: 'Jumat, 03 Desember 2025',
              },
            ].map((item, index) => (
              <View key={index} style={styles.listCard}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.listName}>{item.name}</Text>
                  <Text style={styles.listAddress}>{item.address}</Text>
                  <Text style={styles.listDateText}>{item.day}</Text>
                </View>

                {/* Kalender */}
                <View style={styles.calendarBox}>
                  <Icon name="calendar-month" size={30} color="#555" />
                  <Text style={styles.calendarText}>{item.date}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={{ height: 120 }} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default KunjunganScreen;
