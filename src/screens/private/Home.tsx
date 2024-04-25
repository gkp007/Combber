import { Divider, ScrollView } from '@gluestack-ui/themed';
import {
  Box,
  Text,
  HStack,
  VStack,
  Pressable,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React, { ReactNode, useState } from 'react';
import { StatusBar } from 'react-native';
import AppIcon from '~/components/core/AppIcon';
import useAuth from '~/hooks/useAuth';
import { StackAndTabType } from '~/routes/private/types';
import { COLORS, HEIGHT, WIDTH } from '~/styles';
import AnimatedLottieView from 'lottie-react-native';
import animations from '~/assets/animations';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";



export default function Profile() {
  const { navigate, goBack } = useNavigation<StackAndTabType>();
  const { logout } = useAuth();

  const ptData = [
    {
      value: 160,
      label: 'T',
      // labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 180,
      date: '2',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 190,
      date: '3 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 180,
      date: '4 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 140,
      date: '5 Apr 2022',
      label: '5 Apr',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 145,
      date: '6 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 160,
      date: '7 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 200,
      date: '8 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 220,
      date: '9 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 240,
      date: '1',
      label: '10 Apr',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 280,
      date: '11 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 260,
      date: '12 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 340,
      date: '13 Apr 2022',
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 385,
      labelTextStyle: { color: 'black', width: 40 }
    },
    {
      value: 280,
      date: '15 Apr 2022',
      label: '15 Apr',
      labelTextStyle: { color: 'black', width: 40 }
    },
    { value: 390, date: '16 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 370, date: '17 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 285, date: '18 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 295, date: '19 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    {
      value: 300,
      date: '20 Apr 2022',
      label: '20 Apr',
      labelTextStyle: { color: 'black', width: 40 }
    },
    { value: 280, date: '21 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 295, date: '22 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 260, date: '23 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 255, date: '24 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 190, date: '25 Apr 2022', label: '25 Apr', labelTextStyle: { color: 'black', width: 40 } },
    { value: 220, date: '26 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 205, date: '27 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 230, date: '28 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 210, date: '29 Apr 2022', labelTextStyle: { color: 'black', width: 40 } },
    {
      value: 200,
      date: '30 Apr 2022',
      label: '30 Apr',
      labelTextStyle: { color: 'black', width: 40 }
    },
    { value: 240, date: '1 May 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 250, date: '2 May 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 280, date: '3 May 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 250, date: '4 May 2022', labelTextStyle: { color: 'black', width: 40 } },
    { value: 210, date: '5 May 2022', label: '5 May', labelTextStyle: { color: 'black', width: 40 } }
  ];


  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  return (

    <ScrollView >

      <StatusBar animated backgroundColor={COLORS.theme[700]} />
      <Box bg={'$red100'} m={'$2'} overflow='hidden' h={HEIGHT * 0.6}>

        <LineChart
          areaChart
          isAnimated
          curved
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          data={ptData}
          rotateLabel
          width={WIDTH * 0.9}
          hideDataPoints
          spacing={20}
          color="#00ff83"
          thickness={2}
          startFillColor="#00ff83"
          endFillColor="white"
          startOpacity={0.2}
          endOpacity={0.1}
          initialSpacing={0}
          noOfSections={6}
          maxValue={600}
          yAxisColor="white"
          xAxisColor="white"
          yAxisThickness={0}
          xAxisThickness={0}
          rulesType="solid"
          rulesColor="white"
          yAxisTextStyle={{ color: 'gray' }}
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: 'lightgray',
            pointerStripWidth: 2,
            pointerColor: 'lightgray',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: {
              date: ReactNode; value: string;
            }[]) => {
              return (
                <Box
                  style={{
                    height: 90,
                    width: 100,
                    justifyContent: 'center',
                    marginTop: -30,
                    marginLeft: -40,
                  }}>
                  <Text style={{ color: 'white', fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                    {items[0].date}
                  </Text>

                  <Box style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {'$' + items[0].value + '.0'}
                    </Text>
                  </Box>
                </Box>
              );
            },
          }}
        />
      </Box>


    </ScrollView>
  );
}
