import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';

// Screen yang kamu punya
import HomeScreen from '../screens/HomeScreen';
import KunjunganScreen from '../screens/KunjunganScreen';
import AkunScreen from '../screens/AkunScreen';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D11342', // 🔴 Active: MERAH
        tabBarInactiveTintColor: '#373737ff', // ⚪ Inactive: ABU
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 65,
          backgroundColor: '#fff',
          borderRadius: 25,
          paddingBottom: 10,
          paddingTop: 10,

          // Shadow / floating
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 3 },
        },

        // ICON ACTIVE & INACTIVE
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-sharp';
          } else if (route.name === 'Kunjungan') {
            iconName = 'person-pin-circle';
          } else if (route.name === 'Akun') {
            iconName = 'person';
          }

          return (
            <View style={{ alignItems: 'center' }}>
              <Octicons
                name={iconName}
                size={28}
                color={focused ? '#D11342' : '#9E9E9E'}
              />
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Kunjungan"
        component={KunjunganScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="organization" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Akun"
        component={AkunScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
