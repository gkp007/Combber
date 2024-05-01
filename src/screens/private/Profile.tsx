import {
  AvatarImage,
  Divider,
  FlatList,
  ImageBackground,
} from '@gluestack-ui/themed';
import { ScrollView } from '@gluestack-ui/themed';
import { AvatarFallbackText } from '@gluestack-ui/themed';
import { Avatar } from '@gluestack-ui/themed';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Pressable,
  Spinner,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Linking } from 'react-native';
import { IMAGES } from '~/assets';
import AppIcon, { IconProps } from '~/components/core/AppIcon';
import useAuth from '~/hooks/useAuth';
import { StackAndTabType } from '~/routes/private/types';
import { COLORS, HEIGHT, WIDTH } from '~/styles';
export default function Profile() {
  const { navigate, goBack } = useNavigation<StackAndTabType>();

  function renderItem({
    item,
    index,
  }: {
    item: (typeof listData)[0];
    index: number;
  }) {
    const isLastItem = index === listData.length - 1;

    return (
      <VStack>
        <Pressable
          onPress={item.onPress}
          py={3}
          px={4}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          borderBottomColor="gray.200">
          <HStack space={'xs'} alignItems="center">
            {item.leftIcon && (
              <HStack alignItems="center">
                <Box rounded={'$2xl'} py={'$2'} px={'$2'}>
                  <AppIcon
                    FeatherName={item.leftIcon?.FeatherName}
                    size={item.leftIcon?.size}
                    color={item.leftIcon?.color}
                  />
                </Box>

                {/* <Divider
                  mx={'$1'}
                  py={'$5'}
                  orientation="vertical"
                  bgColor="gray"
                /> */}
              </HStack>
            )}
            <VStack ml={'$1'}>
              <Text fontSize="$sm" fontWeight="$semibold">
                {item.title}
              </Text>
              {item.subtitle && <Text fontSize="$xs">{item.subtitle}</Text>}
            </VStack>
          </HStack>
          <Box mr={'$4'}>
            <AppIcon FeatherName="chevron-right" color={'gray'} size={20} />
          </Box>
        </Pressable>
      </VStack>
    );
  }

  const { logout } = useAuth();

  const listData: {
    title: string;
    subtitle?: string;
    avatar?: string;
    leftIcon?: IconProps & { backgroundColor?: string };
    isHeading?: boolean;
    onPress?: () => void;
  }[] = [
      {
        title: 'Profile',
        leftIcon: {
          FeatherName: 'user',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'Manage Profile',
        // onPress: () => navigate('AllOrders')
      },
      {
        title: 'Bookings',
        leftIcon: {
          FeatherName: 'user',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'See all bookings',
        // onPress: () => navigate('AllOrders')
      },
      {
        title: 'Employee Management',
        leftIcon: {
          FeatherName: 'bell',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'Manage Notification',
        onPress: () => navigate('EmployeeManagement')
      },
      {
        title: 'Employee Details',
        leftIcon: {
          FeatherName: 'bell',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'Add or remove employees',
        // onPress: () => navigate('WishList')
      },
      {
        title: 'Messages',
        leftIcon: {
          FeatherName: 'message-square',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'Manage Chats',
        // onPress: () => navigate('MyCoupons')
      },
    ];

  const listData2: {
    title: string;
    subtitle?: string;
    avatar?: string;
    leftIcon?: IconProps & { backgroundColor?: string };
    isHeading?: boolean;
    onPress?: () => void;
  }[] = [
      {
        title: 'Help & FAQ',
        leftIcon: {
          FeatherName: 'help-circle',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'Get help',
        // onPress: () => navigate('Address')
      },
      {
        title: 'Delete account',
        leftIcon: {
          FeatherName: 'help-circle',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'Get help',
        // onPress: () => navigate('Address')
      },
      {
        title: 'Business Details',
        leftIcon: {
          FeatherName: 'bell',
          color: COLORS.theme[600],
          size: 22,
          backgroundColor: '$amber200',
        },
        subtitle: 'Manage Language',
        // onPress: () => navigate('Wallet')
      },
    ];

  const userData: {
    name?: string;
    email?: string;
    avatar?: string;
    mobileNumber?: number;
    gender?: string;
  } = {
    name: 'Scissors Salon',
    email: 'Gk Pattanaik',
    avatar: IMAGES.LOGO,
    mobileNumber: 775421654,
    gender: 'male',
  };

  return (
    <Box bg={'#ededed'} h={'100%'}>
      <StatusBar animated backgroundColor={COLORS.theme[600]} />
      <Box
        bg={COLORS.theme[600]}
        h={'15%'}
        // zIndex={-1}
        borderBottomLeftRadius={'$2xl'}
        borderBottomRightRadius={'$2xl'}>
        <VStack alignItems="center" space={'xs'}>
          <Pressable
            // justifyContent={'center'}
            // alignItems={'center'}
            borderWidth={'$4'}
            borderColor={COLORS.theme[600]}
            borderRadius={'$full'}
            // position={'absolute'}
            top={'$1/2'}
          // zIndex={1}
          >
            <Avatar size="xl">
              <AvatarFallbackText>Scissors Salon</AvatarFallbackText>
              <AvatarImage
                size="2xl"
                alt="Scissors Salon"
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
            </Avatar>
          </Pressable>
        </VStack>
      </Box>
      {/* about card's */}

      <Box
        bg="#003d73"
        mt={'$12'}
        py={'$4'}
        mx={'$2'}
        rounded={'$lg'}
        flexDirection="row"
        justifyContent="space-around"
        h={'10%'}>
        {/* Followes */}
        <Box alignItems="center">
          <Heading fontSize={'$xl'} color={COLORS.theme[600]}>
            230K
          </Heading>
          <Text color="#FFF" fontWeight="$light" fontSize={'$sm'}>
            Follower
          </Text>
        </Box>
        {/* Clint */}
        <Box alignItems="center">
          <Heading fontSize={'$xl'} color={COLORS.theme[600]}>
            108
          </Heading>
          <Text color="#FFF" fontWeight="$light" fontSize={'$sm'}>
            Clint
          </Text>
        </Box>
        {/* Project */}
        <Box alignItems="center">
          <Heading fontSize={'$xl'} color={COLORS.theme[600]}>
            498
          </Heading>
          <Text color="#FFF" fontWeight="$light" fontSize={'$sm'}>
            Projects
          </Text>
        </Box>
      </Box>

      <Box
        bgColor="#FFF"
        zIndex={0}
        borderRadius={'$md'}
        shadowColor="$amber200"
        // h={'60%'}
        mx={'$2'}
        mt={'$2'}>
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Box>

      <Box
        bgColor="#FFF"
        zIndex={0}
        borderRadius={'$md'}
        shadowColor="$amber200"
        // h={'60%'}
        mx={'$2'}
        mt={'$2'}>
        <FlatList
          data={listData2}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Box>
    </Box>
  );
}
