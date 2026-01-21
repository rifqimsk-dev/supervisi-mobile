import React, { useRef, useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
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

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const FormKunjunganScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [dealer, setDealer] = useState(null);
  const [tujuan, setTujuan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [inventaris, setInventaris] = useState(null);
  const placesRef = useRef(null);

  const dataDealer = [
    { label: 'Dealer Honda A', value: 'A' },
    { label: 'Dealer Honda B', value: 'B' },
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
        {/* FORM */}
        <FlatList
          data={[{ key: 'form' }]}
          keyExtractor={item => item.key}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={() => (
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
                placeholderTextColor="#666"
                onChangeText={setTujuan}
              />

              {/* Alamat */}
              <GooglePlacesAutocomplete
                ref={placesRef}
                placeholder="Masukkan Alamat"
                textInputProps={{ placeholderTextColor: '#666' }}
                fetchDetails
                onPress={(data, details = null) => {
                  const fullAddress = data.description;
                  placesRef.current?.setAddressText(fullAddress);
                  setAlamat(fullAddress);
                  Keyboard.dismiss();
                }}
                query={{
                  key: 'AIzaSyA3PjnzT9jDh5RnEPBaAxJJFTq7rql-AJw',
                  language: 'id',
                  components: 'country:id',
                }}
                styles={{
                  textInput: styles.textInput,
                  listView: { backgroundColor: '#fff' },
                }}
                enablePoweredByContainer={false}
                listViewDisplayed="auto"
              />

              {/* Inventaris */}
              <Dropdown
                style={styles.dropdown}
                data={dataInventaris}
                labelField="label"
                valueField="value"
                placeholder="Pilih Inventaris"
                value={inventaris}
                onChange={item => setInventaris(item.value)}
              />

              {/* Buttons */}
              <View style={styles.rowBtn}>
                <TouchableOpacity style={styles.btnSave}>
                  <Icon name="save" size={18} color="#fff" />
                  <Text style={styles.textBtn}>Simpan</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default FormKunjunganScreen;
