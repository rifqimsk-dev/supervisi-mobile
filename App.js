import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationTabs from './components/NavigationTabs';

import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import FormKunjunganScreen from './screens/FormKunjunganScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const BottomTabs = () => <NavigationTabs />;

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null); // null = loading

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setInitialRoute('HomeTabs');
      } else {
        setInitialRoute('Login');
      }
    };

    checkToken();
  }, []);

  if (!initialRoute) {
    // Loading screen sementara cek token
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#D11342" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="FormKunjungan" component={FormKunjunganScreen} />

        {/* Setelah login → masuk ke halaman dengan Bottom Tabs */}
        <Stack.Screen name="HomeTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
