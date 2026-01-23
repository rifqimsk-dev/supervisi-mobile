import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const DealerDropdown = ({ token }) => {
  const [dealer, setDealer] = useState([]);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      getDealer();
    }
  }, [token]);

  const getDealer = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        'https://supervisi-dev.surisalbi.com/api/dealer',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        },
      );

      setDealer(response.data.data ?? []);
    } catch (error) {
      console.log(
        'Error ambil dealer:',
        error.response?.status,
        error.response?.data || error.message,
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="small" />;
  }

  return (
    <View>
      <Text>Pilih Dealer</Text>

      <Picker
        selectedValue={selectedDealer}
        onValueChange={value => setSelectedDealer(value)}
      >
        <Picker.Item label="-- Pilih Dealer --" value={null} />

        {dealer.map(item => (
          <Picker.Item
            key={item.id}
            label={`${item.nama_dealer} - ${item.kota}`}
            value={item.id}
          />
        ))}
      </Picker>
    </View>
  );
};

export default DealerDropdown;
