import React from 'react';
import { Box } from '@gluestack-ui/themed';
import { HEIGHT } from '~/styles';
import { LineChart } from 'react-native-gifted-charts';

const Home = () => {
  const d1 = [
    { value: 110, label: 'Mon' },
    { value: 90, label: 'Tue' },
    { value: 100, label: 'Wed' },
    { value: 120, label: 'Thu' },
    { value: 100, label: 'Fri' },
    { value: 80, label: 'Sat' },
    { value: 90, label: 'Sun' },

  ];

  return (
    <Box height={HEIGHT * 0.8}>
      <LineChart
        isAnimated
        curved
        thickness={2}
        animateOnDataChange
        animationDuration={1000}
        onDataChangeAnimationDuration={300}
        areaChart
        yAxisTextStyle={{ color: 'black' }}
        startFillColor={'rgb(8,10,234)'}
        endFillColor={'white'}
        startOpacity={0.2}
        endOpacity={0.1}
        backgroundColor="transparent"
        initialSpacing={10}
        data={d1}
        maxValue={140}
        noOfSections={7}
        spacing={60}
        hideDataPoints
        hideRules
        color="blue"
        yAxisColor={'transparent'}
        xAxisColor={'transparent'}
        xAxisLabelTextStyle={{ width: 80, marginLeft: -36 }}

      />
    </Box>
  );
};

export default Home;
