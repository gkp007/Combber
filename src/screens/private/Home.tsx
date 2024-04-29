import { BarChart, LineChart } from "react-native-gifted-charts";
import React, { useState } from 'react';
import { Box, Heading, HStack, Pressable, Text } from "@gluestack-ui/themed";


export default function Home() {

  const [selectedTab, setSelectedTab] = useState('weekly');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab);
  };

  const weeklyData = [
    {
      stacks: [
        { value: 50, color: 'white', marginBottom: 2, },
      ],
      label: 'S',
    },
    {
      stacks: [

        { value: 40, color: 'white', marginBottom: 2 },
      ],
      label: 'M',
    },
    {
      stacks: [

        { value: 30, color: 'white', marginBottom: 2 },
      ],
      label: 'T',
    },
    {
      stacks: [
        { value: 35, color: 'white', },

      ],
      label: 'W',
    },
    {
      stacks: [{ value: 20, color: 'white' },],
      label: 'T',
    },
    {
      stacks: [

        { value: 36, color: 'white', marginBottom: 2 },
      ],
      label: 'F',
    },
    {
      stacks: [
        { value: 45, color: 'white', },

      ],
      label: 'S',
    },
  ]

  const monthlyData = [
    { value: 110, },
    { value: 80, },
    { value: 60, },
    { value: 90, },
    { value: 100, label: '5' },
    { value: 60, },
    { value: 40, },
    { value: 70, },
    { value: 90, },
    { value: 60, label: '10' },
    { value: 130, },
    { value: 0, },
    { value: 60, },
    { value: 50, },
    { value: 67, label: '15' },
    { value: 30, },
    { value: 40, },
    { value: 50, },
    { value: 50, },
    { value: 60, label: '20' },
    { value: 70, },
    { value: 75, },
    { value: 85, },
    { value: 95, },
    { value: 86, label: '25' },
    { value: 76, },
    { value: 59, },
    { value: 75, },
    { value: 41, },
    { value: 20, label: '30' },
  ];

  const yearlyData = [
    {
      stacks: [
        { value: 50, color: 'white', marginBottom: 2, },
      ],
      label: 'Jan',
    },
    {
      stacks: [

        { value: 40, color: 'white', marginBottom: 2 },
      ],
      label: 'Feb',
    },
    {
      stacks: [

        { value: 30, color: 'white', marginBottom: 2 },
      ],
      label: 'Mar',
    },
    {
      stacks: [
        { value: 35, color: 'white', },

      ],
      label: 'Apr',
    },
    {
      stacks: [{ value: 20, color: 'white' },],
      label: 'May',
    },
    {
      stacks: [

        { value: 36, color: 'white', marginBottom: 2 },
      ],
      label: 'Jun',
    },
    {
      stacks: [
        { value: 45, color: 'white', },

      ],
      label: 'Jul',
    },
    {
      stacks: [

        { value: 40, color: 'white', marginBottom: 2 },
      ],
      label: 'Aug',
    },
    {
      stacks: [

        { value: 30, color: 'white', marginBottom: 2 },
      ],
      label: 'Sep',
    },
    {
      stacks: [
        { value: 35, color: 'white', },

      ],
      label: 'Oct',
    },
    {
      stacks: [{ value: 20, color: 'white' },],
      label: 'Nov',
    },
    {
      stacks: [

        { value: 36, color: 'white', marginBottom: 2 },
      ],
      label: 'Dec',
    },

  ];

  return (
    <Box>


      <HStack bg={'$white'} justifyContent="space-between" borderRadius={15} px={'$4'} py={'$1'} mt={'$5'}>
        <Pressable onPress={() => handleTabChange('weekly')}>
          <Box borderBottomWidth={selectedTab === 'weekly' ? 2 : 0}>
            <Text textAlign="center" mx={'$2'} py={'$1'} color={selectedTab === 'weekly' ? "black" : "$grey"} bold fontSize={'$sm'}>Weekly</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleTabChange('monthly')}>
          <Box borderBottomWidth={selectedTab === 'monthly' ? 2 : 0}>
            <Text mx={'$2'} color={selectedTab === 'monthly' ? "black" : "$grey"} bold fontSize={'$sm'}>Monthly</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleTabChange('yearly')}>
          <Box borderBottomWidth={selectedTab === 'yearly' ? 2 : 0}>
            <Text mx={'$2'} color={selectedTab === 'yearly' ? "black" : "$grey"} bold fontSize={'$sm'}>Yearly</Text>
          </Box>
        </Pressable>
      </HStack>



      <Box bg={'$white'} softShadow="1" m={'$1'} borderRadius={'$md'} >

        <Box m={'$2'}>
          <Heading mx={'$2'} fontSize={'$lg'} bold>Average Booking</Heading>
          <Text mx={'$2'} fontSize={'$xs'} color="$blueGray400">52 this week bookings</Text>
        </Box>

        <Box overflow="hidden" m={'$4'} w={'95%'} bg={'$white'} borderRadius={'$lg'} alignSelf="center" alignItems="center" justifyContent="center" >
          {selectedTab === 'weekly' && (
            <BarChart
              height={150}
              barWidth={12}
              spacing={35}
              showGradient
              hideYAxisText
              barBorderTopLeftRadius={15}
              barBorderTopRightRadius={15}
              noOfSections={4}
              stackData={weeklyData}
              yAxisColor={'transparent'}
              xAxisColor={'transparent'}
              gradientColor={'rgba(0, 100, 244,0.8)'}
              frontColor={'black'}
              isAnimated
              animationDuration={1500}
            />
          )}
          {selectedTab === 'monthly' && (
            <LineChart
              isAnimated
              curved
              thickness={1}
              animateOnDataChange
              animationDuration={1000}
              onDataChangeAnimationDuration={300}
              areaChart
              yAxisTextStyle={{ color: 'gray' }}
              startFillColor={'rgb(8,10,254)'}
              endFillColor={'white'}
              startOpacity={0.13}
              endOpacity={0.08}
              showDataPointOnFocus
              showStripOnFocus
              showTextOnFocus
              focusEnabled
              backgroundColor="transparent"
              initialSpacing={0}
              data={monthlyData}
              maxValue={140}
              noOfSections={3}
              spacing={12}
              hideDataPoints
              hideRules
              color="blue"
              yAxisColor={'transparent'}
              xAxisColor={'transparent'}
              xAxisLabelTextStyle={{ width: 80, marginLeft: 26 }}
              pointerConfig={{
                pointerStripHeight: 175,
                pointerStripColor: 'blue',
                pointerStripWidth: 1,
                pointerColor: 'lightgray',
                radius: 6,
                strokeDashArray: [2, 5],
                pointerLabelWidth: 100,
                pointerLabelHeight: 90,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: items => {
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
                      <Box style={{ paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, backgroundColor: 'gray' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                          {'₹ ' + items[0].value + '.0'}
                        </Text>
                      </Box>
                    </Box>
                  );
                },
              }}
            />
          )}
          {selectedTab === 'yearly' && (
            <BarChart
              height={150}
              barWidth={12}
              spacing={35}
              showGradient
              hideYAxisText
              barBorderTopLeftRadius={15}
              barBorderTopRightRadius={15}
              noOfSections={4}
              stackData={yearlyData}
              yAxisColor={'transparent'}
              xAxisColor={'transparent'}
              gradientColor={'rgba(0, 100, 244,0.8)'}
              frontColor={'black'}
              isAnimated
              animationDuration={1500}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};
