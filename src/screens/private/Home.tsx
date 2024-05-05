import React, { useState } from 'react';
import { Box, FlatList, Heading, HStack, Pressable, ScrollView, Text } from "@gluestack-ui/themed";
import { VStack } from '@gluestack-ui/themed';
import AppIcon from '~/components/core/AppIcon';
import { BookingCard } from '~/components/container';

const profileDataArray = [
  {
    name: 'Gopalkrishna',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Hair Cutting', 'Facial & more'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: false,
    status: 'pending',
    bookingDateTime: new Date('2024-05-01T09:05:00')
  },
  {
    name: 'Meenaketan',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Hair Cutting'],
    stylist: 'Sonam Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T09:48:00')



  },
  {
    name: 'Chinamayee',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: false,
    status: 'rejected',
    bookingDateTime: new Date('2024-05-01T09:52:00')



  },
  {
    name: 'Debabrata',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T09:15:00')

  },
  {
    name: 'Debabrata',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T09:15:00')

  },
  {
    name: 'Debabrata',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T09:15:00')

  },
];

const sortByBookingDateTime = (a, b) => {
  return new Date(b.bookingDateTime) - new Date(a.bookingDateTime);
};


export default function Home() {

  const [selectedTab, setSelectedTab] = useState('weekly');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab);
  };


  const sortedBookings = profileDataArray.sort(sortByBookingDateTime);

  const renderItem = ({ item }) => (
    <BookingCard profileData={item} />
  );

  return (

    <Box bg={'white'}>

      <HStack bg="white" justifyContent="space-between" px={'$4'} mt={'$1'} borderBottomWidth={'$2'} borderTopWidth={'$2'} borderTopColor='$blueGray300' borderBottomColor='$blueGray300'>
        <Pressable onPress={() => handleTabChange('weekly')}>
          <Box borderBottomWidth={selectedTab === 'weekly' ? 2 : 0} borderColor='$blue700'>
            <Text textAlign="center" mx={'$2'} py={'$1'} color={selectedTab === 'weekly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Weekly</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleTabChange('monthly')}>
          <Box borderBottomWidth={selectedTab === 'monthly' ? 2 : 0} borderColor='$blue700'>
            <Text mx={'$2'} py={'$1'} color={selectedTab === 'monthly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Monthly</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleTabChange('yearly')}>
          <Box borderBottomWidth={selectedTab === 'yearly' ? 2 : 0} borderColor='$blue700'>
            <Text mx={'$2'} py={'$1'} color={selectedTab === 'yearly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Yearly</Text>
          </Box>
        </Pressable>
      </HStack>

      <ScrollView>

        <Box bg={'$white'} softShadow="1" borderRadius={'$md'} >

          <HStack space={'md'} alignItems='center' justifyContent={'space-between'} m={'$3'} mb={'$3'}>

            <VStack w={'36%'} p={'$2'} px={'$4'} borderWidth={'$1'} bg={'$white'} borderRadius={'$md'} borderColor='$blue700'>
              <HStack justifyContent='space-between' alignItems='center'>
                <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                  5034
                </Heading>
                <AppIcon MaterialCommunityIconsName='chevron-right' size={25} color={'blue'} />

              </HStack>
              <Text fontSize={'$xs'} bold color={'$black'}>
                Up by 5%
              </Text>
              <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$blue700'}>
                Revenue
              </Text>
            </VStack>
            <VStack w={'28%'} p={'$2'} px={'$4'} borderWidth={'$1'} bg={'$white'} borderRadius={'$md'} borderColor='$blue700'>
              <HStack justifyContent='space-between' alignItems='center'>
                <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                  68
                </Heading>
                <AppIcon MaterialCommunityIconsName='chevron-right' size={25} color={'blue'} />

              </HStack>
              <Text fontSize={'$xs'} bold color={'$black'}>
                Up by 10%
              </Text>
              <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$blue700'}>
                Booking
              </Text>
            </VStack>

            <VStack w={'28%'} p={'$2'} px={'$4'} borderWidth={'$1'} bg={'$white'} borderRadius={'$md'} borderColor='$blue700'>
              <HStack justifyContent='space-between' alignItems='center'>
                <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                  68
                </Heading>
                <AppIcon MaterialCommunityIconsName='chevron-right' size={25} color={'blue'} />

              </HStack>
              <Text fontSize={'$xs'} bold color={'$black'}>
                Up by 2%
              </Text>
              <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$blue700'}>
                Slot
              </Text>
            </VStack>

          </HStack>

          <Box m={'$2'}>
            <Heading mx={'$1'} fontSize={'$lg'} bold>Latest Bookings</Heading>
            <Text mx={'$1'} fontSize={'$xs'} color="$blueGray400">15000 this week Earning</Text>
          </Box>

        </Box>

      </ScrollView>

      <FlatList
        data={sortedBookings}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

    </Box >
  );
};
