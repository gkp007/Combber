import {
  Box,
  Text,
  Icon,
} from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import useAuth from '~/hooks/useAuth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppIcon from '~/components/core/AppIcon';
import { COLORS } from '~/styles';
import React from 'react';
import { Private } from 'screens';


const BottomTab = createBottomTabNavigator();

export default () => {
  const { user } = useAuth();
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
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                <Icon
                  m={'$1'}
                  size={'sm'}
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  as={
                    focused ? (
                      <AppIcon AntDesignName="appstore1" />
                    ) : (
                      <AppIcon AntDesignName="appstore-o" />
                    )
                  }
                />
                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}
                >
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
          // component={Private.UploadEmployeeData}
          // component={Private.HRDashboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                <Icon
                  m={1}
                  size={'md'}
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  as={<AppIcon FontistoName="ampproject" />}
                />
                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}
                >
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
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                <Icon
                  m={1}
                  size={'sm'}
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  as={<AppIcon EntypoName="email" />}
                />
                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}
                >
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
            tabBarIcon: ({ focused }) => (
              <Box alignItems={'center'} justifyContent={'center'}>
                <Icon
                  m={'$1'}
                  size={'sm'}
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  as={
                    focused ? (
                      <AppIcon FontAwesomeName="user-circle" />
                    ) : (
                      <AppIcon FontAwesomeName="user-circle-o" />
                    )
                  }
                />
                <Text
                  color={focused ? COLORS.theme[600] : '#748C94'}
                  fontSize={focused ? 10 : 8}
                >
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
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 10,
    // position: 'absolute',
    // bottom: 15,
    // right: 10,
    // left: 10,
    // borderRadius: 12,
  },
});
