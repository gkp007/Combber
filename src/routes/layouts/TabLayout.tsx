import {Box, Text, Icon, AddIcon} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import useAuth from '~/hooks/useAuth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppIcon from '~/components/core/AppIcon';
import {COLORS} from '~/styles';
import React from 'react';
import {Private} from '~/screens';

const BottomTab = createBottomTabNavigator();

export default function TabLayout() {
  const {user} = useAuth();
  const [open, setOpen] = useState(false);
  const toggleOpened = () => {
    setOpen(!open);
  };
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            paddingBottom: 5,
            margin: 0,
            bottom: 5,
            left: 8,
            right: 8,
            borderRadius: 10,
            height: 60,
          },
        }}>
        <BottomTab.Screen
          name="Dashboard"
          component={Private.Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#d07131'} AntDesignName="home" />
                ) : (
                  <AppIcon color={'#3b3b3b'} AntDesignName="home" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
        <BottomTab.Screen
          name="MyProjects"
          component={Private.Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#d07131'} FeatherName="calendar" />
                ) : (
                  <AppIcon color={'#3b3b3b'} FeatherName="calendar" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
        <BottomTab.Screen
          name="menu"
          component={Private.Profile}
          options={{
            tabBarItemStyle: {
              height: 0,
            },
            tabBarButton: () => (
              <Box
                bg="#d0d0d0"
                alignItems={'center'}
                justifyContent={'center'}
                rounded={'$full'}
                w={'$10'}
                h={'$10'}>
                <AppIcon color={'#000000'} FeatherName="menu" />
              </Box>
            ),
          }}
        />
        <BottomTab.Screen
          name="Email"
          component={Private.GooMap}
          options={{
            tabBarIcon: ({focused}) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#d07131'} FeatherName="map-pin" />
                ) : (
                  <AppIcon color={'#3b3b3b'} FeatherName="map-pin" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Private.Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                {focused ? (
                  <AppIcon color={'#d07131'} FontAwesomeName="user-circle" />
                ) : (
                  <AppIcon color={'#3b3b3b'} FontAwesomeName="user-circle-o" />
                )}
              </Box>
            ),
          }}
          listeners={{
            tabPress: () => setOpen(false),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
