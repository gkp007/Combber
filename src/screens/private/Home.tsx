import React, {useState} from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Center,
  VStack,
  HStack,
  Pressable,
  Input,
  EyeIcon,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from '@gluestack-ui/themed';
import AppIcon from '~/components/core/AppIcon';
import {BookingCard} from '~/components/container';
import TopServices from '~/components/TopServices';
import TopProfessionals from '~/components/TopProfessional';
import {useNavigation} from '@react-navigation/native';
import {StackAndTabType} from '~/routes/private/types';
import HomeSlider from '~/components/HomeSlider';

export default function Home() {
  const {navigate, goBack} = useNavigation<StackAndTabType>();

  const bannerData = [
    {
      id: '1',
      imageUrl:
        'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg',
    },
    {
      id: '2',
      imageUrl:
        'https://img.freepik.com/free-photo/beard-grooming-close-up-shot_1163-2024.jpg',
    },
    {
      id: '3',
      imageUrl:
        'https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20962.jpg',
    },
    {
      id: '4',
      imageUrl:
        'https://img.freepik.com/free-photo/stylish-man-sitting-barbershop_1157-24968.jpg',
    },
  ];

  const handleSearch = () => {};

  const selectType = [
    {
      id: '1',
      type: 'Man',
    },
    {
      id: '2',
      type: 'Woman',
    },
    {
      id: '3',
      type: 'Unisex',
    },
  ];

  const serviceType = [
    {
      id:'1',
      svType:'Hair Cut'
    },
    {
      id:'2',
      svType:'Beard'
    },
    {
      id:'3',
      svType:'facials'
    },
    {
      id:'4',
      svType:'Hair Colour'
    },
    {
      id:'5',
      svType:'Manciure'
    },
    {
      id:'6',
      svType:'Padicure'
    },
    {
      id:'7',
      svType:'Waxing'
    },
    {
      id:'8',
      svType:'Threding'
    },
  ]

  return (
    <Box bg={'white'} flex={1}>
      {/* Profile */}
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        p={3}
        alignItems={'center'}>
        <HStack direction="rtl" alignItems={'center'}>
          <Image
            alt="profile_Image"
            size="sm"
            rounded={'$md'}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png',
            }}
          />
          <Box p={4}>
            <Heading fontWeight={'900'} fontSize={20}>
              Debabrata Giri
            </Heading>
            <Text fontWeight={'$bold'} color={'#5F5F5F'} fontSize={15}>
              6391 Elgin St. Celina
            </Text>
          </Box>
        </HStack>
        <HStack direction="ltr">
          <Box
            p={5}
            borderWidth={1}
            borderColor={'#939393'}
            rounded={'$md'}
            m={1}>
            <Pressable>
              <AppIcon
                IoniconsName="notifications"
                size={30}
                color={'#1e1e1e'}
              />
            </Pressable>
            <Center
              bgColor="#ffffff"
              rounded={'$full'}
              position="absolute"
              right={'$1'}
              px={'$1.5'}>
              <Text fontSize={'$xs'}>3</Text>
            </Center>
          </Box>
          <Box
            p={5}
            borderWidth={1}
            borderColor={'#aeaeae'}
            rounded={'$md'}
            m={1}>
            <Pressable>
              <AppIcon FeatherName="heart" size={30} color={'#1e1e1e'} />
            </Pressable>
            <Center
              bg="#e00000"
              rounded={'$full'}
              position={'absolute'}
              right={'$1'}
              px={'$1.5'}>
              <Text fontSize={'$xs'} color="#FFF">
                7
              </Text>
            </Center>
          </Box>
        </HStack>
      </Box>
      {/* Search Filter */}
      <Center>
        <Input w={'98%'}>
          <InputField type={'text'} placeholder="Search Location or salon.." />
          <InputSlot pr="$3" onPress={handleSearch}>
            <InputIcon as={SearchIcon} color="$blueGray300" />
          </InputSlot>
        </Input>
      </Center>
      {/* Exclusive  */}
      <Text
        py={'$4'}
        fontWeight="$extrabold"
        fontSize={'$2xl'}
        mx={'$4'}
        color={'#121212'}>
        Exclusive Offers
      </Text>

      {/* Image coro... */}
      <HomeSlider bannerData={bannerData} />

      {/* Upcoming... */}
      <HStack
        justifyContent="space-between"
        py={'$2'}
        mx={'$2'}
        alignItems="center">
        <Text fontWeight="$extrabold" fontSize={'$xl'} color={'#121212'}>
          Upcomming Appointment
        </Text>
        <Pressable>
          <Text fontWeight="$semibold" fontSize={'$md'} color={'#505050'}>
            View ALl
          </Text>
        </Pressable>
      </HStack>

      {/* Select Type */}
      <HStack mx={'$3'}>
        {selectType?.map(i => (
          <HStack
            // w={'$1/4'}
            py={'$2'}
            px={'$4'}
            mx={'$2'}
            borderWidth={'$1'}
            bg={'#ffffff'}
            borderRadius={'$lg'}
            borderColor="#fff"
            hardShadow="1"
            alignItems="center"
            justifyContent="space-between">
            <Image
              source={{
                uri: `https://cdn-icons-png.flaticon.com/512/4440/4440953.png`,
              }}
              borderRadius={4}
              overflow={'hidden'}
              alt="no image"
              w={'$12'}
              h={'$12'}
              resizeMode="cover"
            />
            <Text fontSize={'$md'} bold color={'$black'}>
              {i?.type}
            </Text>
          </HStack>
        ))}
      </HStack>

      {/* Explore by service  */}


    </Box>
  );
}
