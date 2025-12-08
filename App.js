import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationTabs from './components/NavigationTabs';

import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import FormKunjunganScreen from './screens/FormKunjunganScreen';

const Stack = createNativeStackNavigator();

const BottomTabs = () => <NavigationTabs />;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
