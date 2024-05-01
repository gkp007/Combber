import React from 'react';
import { Text, HStack, VStack, Image, Pressable, Box, Divider } from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import { PrivateContainer } from '~/components/shared';

interface ProfileData {
    name: string;
    phoneNumber: string;
    availability: string;
    services: string[];
    stylist: string;
    amount: number;
    paymentStatus: boolean;
    status: string;
}

interface ProfileDataProps {
    profileData: ProfileData;
}

const ProfileCard: React.FC<ProfileDataProps> = ({ profileData }) => {
    return (

        <PrivateContainer title={'My Employees'}>
            <Pressable
                bgColor={'#FFFF'}
                borderRadius={'$xl'}
                mx={'$2'}
                borderWidth={'$1'}
                borderColor='$coolGray400'
                overflow='hidden'
                mt={'$4'}
            >
                {/* Profile Header */}
                <HStack
                    alignItems='center'
                    backgroundColor='$coolGray100'
                    borderTopRightRadius={'$md'}
                    borderTopLeftRadius={'$2xl'}>
                    <Image
                        alignSelf='flex-start'
                        source={{
                            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                        }}
                        alt=""
                        borderRadius={10}
                        size={'sm'}
                        p={'$2'}
                        m={'$2'}
                    />
                    <VStack p={'$2'} width={'55%'} alignSelf='flex-start'>
                        <Text fontSize="$lg" bold>
                            {'Motilal Nayak' || 'Not Available'}
                        </Text>
                        <Text fontSize="$xs" color={'blue.500'}>
                            {'9445654216' || 'Not Available'}
                        </Text>
                        <Text fontSize="$xs" color={'blue.500'}>
                            {'1 year 3 month' || 'Not Available'}
                        </Text>
                    </VStack>
                    <VStack alignItems='flex-end' space={'xl'}>
                        <HStack alignItems='center' px={'$2'} mt={'$1'} bg={'$white'} mx={'$2'} space={'xs'} borderRadius={'$2xl'} >

                            <AppIcon MaterialCommunityIconsName="circle-slice-8" color={'green'} size={10} />
                            <Text fontSize="$xs" color={'$green500'} bold>
                                Active
                            </Text>
                            {/* <AppIcon EvilIconsName="chevron-down" color={'green'} size={20} /> */}

                        </HStack>
                        <HStack
                            p={'$2'}
                            space={'xs'}
                            alignItems='center'
                            alignSelf='flex-end'>
                            <Text fontSize="$xs" color={'$red500'}>
                                View Details
                            </Text>
                            <AppIcon AntDesignName="caretright" color={'red'} size={10} />
                        </HStack>
                    </VStack>
                </HStack>

                <Divider bg="$coolGray300" />

                {/* Profile Services */}
                <HStack justifyContent='space-between' my={'$2'} alignItems={'center'}>

                    <Box px={'$2'} w={WIDTH * 0.4}>
                        <VStack space={'xs'}>
                            <Text fontSize="$lg" bold color='$black' textAlign='center'>
                                {'24605' || 'Not Available'}
                            </Text>
                            <Text fontSize="$lg" textAlign='center'>
                                Total Revenue
                            </Text>
                        </VStack>
                    </Box>

                    <Divider bg="$coolGray300" orientation='vertical' />

                    <VStack justifyContent={'center'} w={WIDTH * 0.4} mr={'$2'}>
                        <Text textAlign='center' bold color='$black'>
                            {'1606' || 'Not Available'}
                        </Text>
                        <Text textAlign='center' >
                            Total Bookings
                        </Text>
                    </VStack>
                </HStack>

                <Divider bg="$coolGray300" />


            </Pressable>
        </PrivateContainer>
    );
};

export default ProfileCard;
