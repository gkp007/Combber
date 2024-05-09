import React, { useState } from 'react';
import {
    Text,
    HStack,
    Pressable,
    Heading,
    Box,
    VStack,
    ScrollView,
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    FlatList
} from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import Btn from '~/components/core/Btn';
import { PrivateContainer } from '~/components/shared';

const BusinessInfo = () => {
    const [businesses, setBusinesses] = useState([
        {
            name: 'Any Professional',
            imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            selected: false
        },
        {
            name: 'Jashon Stathom',
            rating: 4.5,
            imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            selected: false
        },
        {
            name: 'Robert Dw. Jr',
            rating: 4.5,
            imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            selected: false
        },
    ]);

    const handleCardPress = (index) => {
        const updatedBusinesses = businesses.map((business, idx) => ({
            ...business,
            selected: idx === index ? !business.selected : false
        }));
        setBusinesses(updatedBusinesses);
    };

    const renderItem = ({ item, index }) => (
        <Pressable onPress={() => handleCardPress(index)}>

            <VStack alignItems="center" m={'$2'} py={'$10'} space={'md'} w={WIDTH * 0.46} borderWidth={'$1'} borderColor={item.selected ? '$green600' : '$coolGray300'} borderRadius={'$md'} p={'$5'} key={item.name}>

                {item.selected &&
                    <Box position='absolute' right={'$5'} top={'$5'}>
                        <AppIcon
                            IoniconsName="checkmark-done"
                            color={'green'}
                            size={25}
                        />
                    </Box>
                }
                <Pressable
                    borderWidth={'$2'}
                    borderColor={item.selected ? '$green600' : '$coolGray300'}
                    borderRadius={'$full'}

                >



                    <Avatar size="lg" bg={'$white'}>
                        <AvatarFallbackText>{item.name}</AvatarFallbackText>
                        <AvatarImage
                            size="lg"
                            alt={item.name}
                            source={{
                                uri: item.imageUrl,
                            }}
                        />
                    </Avatar>
                </Pressable>
                <HStack space={'xs'} alignItems={'center'} bg={'$coolGray100'} px={'$2'} borderRadius={'$md'}>
                    {item.rating ? (
                        <>
                            <Text color={'$black'} fontSize={'$md'} bold>{item.rating}</Text>
                            <AppIcon
                                AntDesignName="star"
                                color={'orange'}
                                size={17}
                            />
                        </>
                    ) : (
                        <Text color={'$black'} fontSize={'$xs'}>Max Availability</Text>

                    )}
                </HStack>
                <Text color={item.selected ? '$green600' : '$black'} fontSize={'$md'} bold>{item.name}</Text>
            </VStack>
        </Pressable>
    );

    return (
        <PrivateContainer title={'Select Professional'}>


            <FlatList
                data={businesses}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={{ flexGrow: 1 }}
            />


            <Box m={'$2'}>
                <Btn
                    bg={COLORS.theme[600]}
                    _text={{ color: 'white', fontSize: '$sm' }}
                >
                    <Heading fontSize={15} color={'white'}>
                        <HStack alignItems={'center'} space={'xs'}>
                            <Text color={'white'} bold> Submit </Text>
                            <AppIcon
                                FeatherName="log-in"
                                color={'white'}
                                size={20}
                            />
                        </HStack>
                    </Heading>
                </Btn>
            </Box>
        </PrivateContainer>
    );
};

export default BusinessInfo;
