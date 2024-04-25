import React from 'react';
import { useState } from 'react';
import { LineChart } from 'react-native-gifted-charts';
import { Box, Text } from '@gluestack-ui/themed';
import { HEIGHT } from '~/styles';

const Home = () => {


  const lcomp = ({ value }) => (
    <Box style={{ width: 70, height: 50 }}>
      <Text style={{ color: 'black', fontWeight: 'bold' }}>{value}</Text>
    </Box>
  );
  // Custom Data Point Component

  const dPoint = () => (
    <Box
      style={{
        width: 14,
        height: 14,
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 7,
        borderColor: '#07BAD1',
      }}
    />
  );

  const latestData = [
    {
      value: 100,
      labelComponent: lcomp,
      customDataPoint: dPoint,
      labelProps: { value: '22 Nov' }
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 210,
      customDataPoint: dPoint,
    },
    {
      value: 250,
      hideDataPoint: true,
    },
    {
      value: 320,
      labelComponent: lcomp,
      customDataPoint: dPoint,
      labelProps: { value: '24 Nov' }
    },
    {
      value: 310,
      hideDataPoint: true,
    },
    {
      value: 270,
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 130,
      labelComponent: () => lcomp('26 Nov'),

      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      hideDataPoint: true,
    },
    {
      value: 270,
      labelComponent: () => lcomp('28 Nov'),

      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      labelComponent: () => lcomp('30 Nov'),

      customDataPoint: dPoint,
    },
    {
      value: 20,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
  ];

  const [currentData, setCurrentData] = useState(latestData);

  return (
    <Box mx={'$4'} bg={'$amber300'} height={HEIGHT * 0.8}>
      <LineChart
        isAnimated
        curved
        thickness={2}
        color="#07BAD1"
        maxValue={600}
        noOfSections={3}
        animateOnDataChange
        animationDuration={1000}
        onDataChangeAnimationDuration={300}
        areaChart
        yAxisTextStyle={{ color: 'black' }}
        xAxisLabelTextStyle={{ color: 'black' }}
        data={currentData}
        hideDataPoints
        startFillColor={'rgb(84,219,234)'}
        endFillColor={'white'}
        startOpacity={0.4}
        endOpacity={0.1}
        spacing={22}
        backgroundColor="transparent"
        initialSpacing={10}
        yAxisColor="transparent"
        xAxisColor="transparent"
      />
    </Box>
  );
};

export default Home;
