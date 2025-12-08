import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/formKunjungan';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormKunjunganScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [dealer, setDealer] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [inventaris, setInventaris] = useState(null);
  const [tujuan, setTujuan] = useState('');

  const dataDealer = [
    { label: 'Dealer Honda A', value: 'A' },
    { label: 'Dealer Honda B', value: 'B' },
  ];

  const dataAlamat = [
    { label: 'Alamat 1', value: 'alamat1' },
    { label: 'Alamat 2', value: 'alamat2' },
  ];

  const dataInventaris = [
    { label: 'Motor', value: 'motor' },
    { label: 'Mobil', value: 'mobil' },
  ];

  const onChangeDate = (event, selectedDate) => {
    setShowDate(false);
    if (selectedDate) setDate(selectedDate);
  };

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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="arrow-back" color="#fff" size={22} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Tambah Kunjungan Baru</Text>
        </LinearGradient>
        <ScrollView
          style={styles.formWrapper}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* FORM */}
          <View style={styles.formWrapper}>
            {/* Tanggal */}
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowDate(true)}
            >
              <Text>{date.toISOString().slice(0, 10)}</Text>
              <Icon name="calendar-month" size={18} color="#444" />
            </TouchableOpacity>

            {showDate && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}

            {/* Dealer */}
            <Dropdown
              style={styles.dropdown}
              data={dataDealer}
              labelField="label"
              valueField="value"
              placeholder="Pilih Dealer"
              value={dealer}
              onChange={item => setDealer(item.value)}
            />

            {/* Tujuan */}
            <TextInput
              style={styles.textInput}
              placeholder="Tujuan"
              value={tujuan}
              onChangeText={setTujuan}
            />

            {/* Alamat */}
            <Dropdown
              style={styles.dropdown}
              data={dataAlamat}
              labelField="label"
              valueField="value"
              placeholder="Alamat"
              value={alamat}
              onChange={item => setAlamat(item.value)}
            />

            {/* Inventaris */}
            <Dropdown
              style={styles.dropdown}
              data={dataInventaris}
              labelField="label"
              valueField="value"
              placeholder="Pilih Inventaris yg digunakan"
              value={inventaris}
              onChange={item => setInventaris(item.value)}
            />

            {/* BUTTONS */}
            <View style={styles.rowBtn}>
              <TouchableOpacity
                style={styles.btnSave}
                onPress={() =>
                  navigation.navigate('HomeTabs', { screen: 'Kunjungan' })
                }
              >
                <Icon name="save" size={18} color="#fff" />
                <Text style={styles.textBtn}>Simpan</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnReset}>
                <Icon name="refresh" size={18} color="#fff" />
                <Text style={styles.textBtn}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FormKunjunganScreen;
