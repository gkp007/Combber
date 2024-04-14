import { AvatarImage, Divider, FlatList, ImageBackground } from '@gluestack-ui/themed';
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


  function renderItem({ item, index }: { item: typeof listData[0], index: number }) {

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

          borderBottomColor="gray.200"
        >
          <HStack space={'xs'} alignItems="center">
            {item.leftIcon && (
              <HStack alignItems='center'>

                <Box rounded={'$xl'} m={'$2'} p={'$2'}>
                  <AppIcon
                    FeatherName={item.leftIcon?.FeatherName}
                    size={item.leftIcon?.size}
                    color={item.leftIcon?.color}
                  />
                </Box>

                <Divider mx={'$1'} py={'$5'} orientation="vertical" bgColor='gray' />
              </HStack>


            )}
            <VStack ml={'$4'}>
              <Text fontSize="$lg" fontWeight='$semibold'>{item.title}</Text>
              {item.subtitle && <Text fontSize="$xs">{item.subtitle}</Text>}
            </VStack>
          </HStack>
          <Box mr={'$4'}>
            <AppIcon
              FeatherName="chevron-right"
              color={'gray'}
              size={20}
            />
          </Box>



        </Pressable>
        {!isLastItem && <Divider my={'$2'} alignSelf='center' width={'60%'} orientation="horizontal" bgColor='transparent' />}
      </VStack>
    );
  }


  const { logout } = useAuth();

  // const handleLogout = () => {
  //   logout();
  //   navigate('Login');
  // };

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
        leftIcon: { FeatherName: 'user', color: COLORS.theme[600], size: 18, backgroundColor: '$amber200' },
        subtitle: 'Manage Profile',
        // onPress: () => navigate('AllOrders')

      },
      {
        title: 'Notification',
        leftIcon: { FeatherName: 'bell', color: COLORS.theme[600], size: 18, backgroundColor: '$amber200' },
        subtitle: 'Manage Notification',
        // onPress: () => navigate('WishList')
      },
      {
        title: 'Messages',
        leftIcon: { FeatherName: 'message-square', color: COLORS.theme[600], size: 18, backgroundColor: '$amber200' },
        subtitle: 'Manage Chats',
        // onPress: () => navigate('MyCoupons')
      },
      {
        title: 'Help & FAQ',
        leftIcon: { FeatherName: 'help-circle', color: COLORS.theme[600], size: 18, backgroundColor: '$amber200' },
        subtitle: 'Get help',
        // onPress: () => navigate('Address')
      },
      {
        title: 'Languages',
        leftIcon: { FeatherName: 'bell', color: COLORS.theme[600], size: 18, backgroundColor: '$amber200' },
        subtitle: 'Manage Language',
        // onPress: () => navigate('Wallet')
      },
      {
        title: 'Log Out',
        leftIcon: { FeatherName: 'log-out', color: COLORS.theme[600], size: 18, backgroundColor: '$amber200' },

        subtitle: 'See all settings',
        onPress: () => {
          logout();
          navigate('Login');
        }
      },

      // {
      //   title: 'Privacy Policy',
      //   leftIcon: { FeatherName: 'lock', color: COLORS.PRIMARY, size: 18 },
      //   onPress: () => Linking.openURL('https://yard-ecommerce-web.vercel.app/privacy-policy')
      // },
      // {
      //   title: 'Terms of Service',
      //   leftIcon: { FeatherName: 'file-text', color: COLORS.PRIMARY, size: 18 },
      //   onPress: () => Linking.openURL('https://yard-ecommerce-web.vercel.app/terms-and-conditions')

      // },
      // {
      //   title: 'About',
      //   leftIcon: { FeatherName: 'info', color: COLORS.PRIMARY, size: 18 },
      // },

      // {
      //   title: 'Logout',
      //   leftIcon: { FeatherName: 'log-out', color: COLORS.PRIMARY, size: 18 },
      //   onPress: () => {
      //     logout();
      //     navigate('Login');
      //   }
      // },

    ];
  const userData: {
    name?: string;
    email?: string;
    avatar?: string;
    mobileNumber?: number;
    gender?: string;

  } =
  {
    name: 'Scissors Salon',
    email: 'Gk Pattanaik',
    avatar: IMAGES.LOGO,
    mobileNumber: 775421654,
    gender: 'male',
  }



  return (
    <Box bg={'white'} h={'$full'} >
      <StatusBar animated backgroundColor={COLORS.theme[600]} />
      <ImageBackground
        h={HEIGHT * 0.3}
        borderRadius={5}
        resizeMode="cover"
        source={IMAGES.ONBOARDING}
        alt="Logo"
        zIndex={1}
        imageStyle={{ opacity: 0.5, backgroundColor: 'blue' }}>

        <VStack alignItems="center" space={'xs'} mt={5} >



          <Pressable
            justifyContent={'center'}
            alignItems={'center'}
            borderWidth={'$2'}
            borderColor={COLORS.theme[600]}
            borderRadius={'$full'}
            position={'absolute'}
            top={'$16'}
            zIndex={1}
          >
            <Avatar size="xl">
              <AvatarFallbackText>Scissors Salon</AvatarFallbackText>
              <AvatarImage
                size="2xl"
                alt='Scissors Salon'
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>
          </Pressable>


        </VStack>
      </ImageBackground>

      <Heading textAlign={'center'} size="md" color={'black'} mt={'$12'} >
        Scissors Salon
      </Heading>

      <Text mb={'$5'} color={'black'} mt={1} textAlign={'center'} fontSize={14}>Gopalkrishna Pattanaik</Text>
      <ScrollView >

        <Box zIndex={0} mt={'$5'} bg={'white'} mx={3} >
          <FlatList
            data={listData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

        </Box>

      </ScrollView >
    </Box >
  );
}
