import React from 'react';
import { Text, HStack, VStack, Image, Pressable, FlatList, Box, Switch } from '@gluestack-ui/themed';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';
import AppIcon from '~/components/core/AppIcon';
import { Heading } from '@gluestack-ui/themed';
import { COLORS, HEIGHT } from '~/styles';


const Ratings: React.FC = () => {
    return (
        <PrivateContainer title={'Rating Management'}>
            <Box bg={'white'} flex={1}>

                <Box borderWidth={'$1'} borderColor='$orange400' borderRadius={'$md'}>

                    <Pressable
                        bgColor={'#FFFF'}
                        mx={'$2'}
                        overflow='hidden'

                    >
                        <HStack
                            alignItems='center'
                            backgroundColor='$white'
                            borderTopRightRadius={'$md'}
                            borderTopLeftRadius={'$2xl'}
                        >
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYSmggkf5jDHGvSazF0fmeP138VqfqY-ZyH9CCqoTMA&s",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'sm'}
                                p={'$2'}
                                m={'$2'}
                            />
                            <HStack alignItems='center' justifyContent='space-between' flex={1}>
                                <VStack p={'$2'} alignSelf='flex-end' space={'sm'}>
                                    <Text fontSize="$lg" bold>
                                        {'Amulya Behera' || 'Not Available'}
                                    </Text>
                                    <Text fontSize="$md" >
                                        {'Nayaplli,bhubaneswar' || 'Not Available'}
                                    </Text>
                                </VStack>
                                <Pressable mx={'$2'} borderRadius={'$md'} bg={'$blueGray100'}>
                                    <Text px={'$3'} py={'$0.5'} fontSize="$xs" bold >
                                        4.3
                                    </Text>
                                </Pressable>
                            </HStack>
                        </HStack>
                    </Pressable>

                </Box>
            </Box>

        </PrivateContainer>
    );
};

export default Ratings;
