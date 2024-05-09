import {Box, Image, Pressable} from '@gluestack-ui/themed';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {HEIGHT,WIDTH} from '~/styles';

export default function HomeSlider({bannerData}: any) {
  return (
    <>
      <Box h={HEIGHT/2}>
        <Carousel
          loop
          // height={HEIGHT}
          width={WIDTH}
          autoPlay={true}
          data={bannerData}
          scrollAnimationDuration={2000}
          renderItem={({item}: any) => (
            <Pressable
              m={3}
              overflow={'hidden'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Image
                source={{uri: item?.imageUrl}}
                borderRadius={4}
                overflow={'hidden'}
                alt="no image"
                w={'$full'}
                h={'$full'}
                resizeMode="cover"
              />
            </Pressable>
          )}
        />
      </Box>
    </>
  );
}
