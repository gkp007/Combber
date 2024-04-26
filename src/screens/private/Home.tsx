import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import { HEIGHT } from '~/styles';
import { LineChart } from 'react-native-gifted-charts';

const Home = () => {
  const d1 = [
    { value: 110, label: 'M' },
    { value: 70, label: 'T' },
    { value: 100, label: 'W' },
    { value: 120, label: 'T' },
    { value: 30, label: 'F' },
    { value: 120, label: 'S' },
    { value: 90, label: 'S' },
  ];

  return (
    <>
      <Box m={2} bg={'white'} mt={'$5'} softShadow='1' mx={'$1.5'} py={'$5'} borderRadius={'$2xl'} py={5}>
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
          data={d1}
          maxValue={140}
          noOfSections={3}
          spacing={60}
          hideDataPoints
          hideRules
          color="blue"
          yAxisColor={'transparent'}
          xAxisColor={'transparent'}
          xAxisLabelTextStyle={{ width: 80, marginLeft: -36 }}

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
      </Box>
    </>
  );
};

export default Home;
