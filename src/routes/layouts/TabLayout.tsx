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
                <Box>
                  {focused ? (
                    <AppIcon AntDesignName="appstore1" />
                  ) : (
                    <AppIcon AntDesignName="appstore-o" />
                  )}
                </Box>
                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}>
                  Dashboard
                </Text>
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
                <Box>
                  <AppIcon FontistoName="ampproject" />
                </Box>
                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}>
                  Project
                </Text>
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
            // tabBarButton: () => <BottomAdd open={open} setOpen={setOpen} />,
          }}
        />
        <BottomTab.Screen
          name="Email"
          component={Private.Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                <Box>
                  <AppIcon EntypoName="email" />
                </Box>
                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}>
                  Email
                </Text>
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
                <Box>
                  {focused ? (
                    <AppIcon FontAwesomeName="user-circle" />
                  ) : (
                    <AppIcon FontAwesomeName="user-circle-o" />
                  )}
                </Box>

                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}>
                  Profile
                </Text>
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
