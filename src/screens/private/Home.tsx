import React from 'react';
import { Box, Heading, Text, VStack, HStack } from '@gluestack-ui/themed';
import { IMAGES } from '../../assets';
import { DashboardCard } from '../../components/container';

const Home = () => {
  const DashboardCards = [
    {
      id: '1',
      value: 13 || 0,
      image: IMAGES.LOGO,
      title: 'Total Employees',
      color1: '#BBCBFF',
    },
    {
      id: '2',
      value: 12 || 0,
      image: IMAGES.LOGO,
      title: 'My Attendance',
      color1: '#B9E9FD',
    },
    {
      id: '3',
      value: 10 || 0,
      image: IMAGES.LOGO,
      title: 'total Projects',
      color1: '#F6C8FF',
    },
    {
      id: '4',
      value: 4,
      image: IMAGES.LOGO,
      title: 'Scanned Cards',
      color1: '#FEB76F',
    },
  ];

  // Group DashboardCards into pairs
  const pairs = [];
  for (let i = 0; i < DashboardCards.length; i += 2) {
    pairs.push(DashboardCards.slice(i, i + 2));
  }

  return (
    <>
      <Heading textAlign="center" bold color="black" size="2xl">
        Welcome Back{' '}
      </Heading>
      <Text textAlign="center" size="sm" bold color="black">
        Login to your account.
      </Text>

      <Box display="flex" justifyContent="center" alignItems='center'>
        {pairs.map((pair, index) => (
          <HStack key={index} space={'xs'}>
            {pair.map((item) => (
              <DashboardCard key={item.id} item={item} />
            ))}
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default Home;
