import React, { useMemo, useState } from 'react';
import {
    Text,
    HStack,
    Heading,
    Box,
    VStack,
    ScrollView,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Icon,
    CloseIcon,
    ButtonText,
    Modal,
    ModalBackdrop,
    Divider,
    Pressable
} from '@gluestack-ui/themed';
import { COLORS } from '~/styles';
import AppInput from '~/components/core/AppInput';
import { useForm } from 'react-hook-form';
import AppIcon from '~/components/core/AppIcon';
import Btn from '~/components/core/Btn';

type FormInput = {
    key: string;
    label?: string;
    placeholder: string;
    icon: any;
    rules: Object;
    inputProps?: any;
};

type Service = {
    name: string;
    category: string;
    duration: string;
    price: string;
};

const BusinessInfo = () => {
    const [showModal, setShowModal] = useState(false);
    const [services, setServices] = useState<Service[]>([{ category: '', name: '', duration: '', price: '' }]);
    const ref = React.useRef(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const handleAddService = () => {
        setServices([...services, { category: '', name: '', duration: '', price: '' }]);
    };

    const handleServiceChange = (index: number, key: keyof Service, value: string) => {
        const updatedServices = [...services];
        updatedServices[index][key] = value;
        setServices(updatedServices);
    };

    const renderServiceInputs = () => {

        const handleDeleteService = (index: number) => {
            const updatedServices = [...services];
            updatedServices.splice(index, 1);
            setServices(updatedServices);
        };


        return services.map((service, index) => (
            <VStack key={index}>
                {/* {index > 0 && (
                    <Divider orientation='horizontal' my={'$2'} />
                )} */}

                <HStack justifyContent="space-between" mt={index > 0 ? '$6' : '$0'} borderRadius={'$xl'} alignItems='center' >
                    <Text fontSize="$lg" fontWeight="bold" py={'$1'}>
                        Service {index + 1}
                    </Text>
                    <Box>

                        {index > 0 && (
                            <Pressable onPress={() => handleDeleteService(index)} >
                                <AppIcon MaterialCommunityIconsName="delete-outline" color="red" size={22} />
                            </Pressable>
                        )}
                    </Box>
                </HStack>

                <Divider orientation='horizontal' bg={'$blue200'} my={'$2'} />
                <AppInput
                    key={` Category:'',-${index}`}
                    input={{
                        key: ` Category-${index}`,
                        label: 'Category Name',
                        color: '$white',
                        placeholder: 'Select Category',
                        icon: { FeatherName: 'codesandbox' },
                        rules: {
                            required: 'Category Name is required',
                            pattern: {
                                minLength: 5,
                            },
                        },
                        inputProps: {
                            autoCapitalize: 'none',
                            marginBottom: '2',
                            value: service.category,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                handleServiceChange(index, 'name', e.target.value),
                        },
                    }}
                    control={control}
                    errorMessage={errors?.[`Name-${index}`]?.message}
                />
                <AppInput
                    key={`name-${index}`}
                    input={{
                        key: `Name-${index}`,
                        label: 'Service Name',
                        color: '$white',
                        placeholder: 'Service Name e.g Long, short, creative',
                        icon: { FontAwesomeName: 'scissors' },
                        rules: {
                            required: 'Service Name is required',
                            pattern: {
                                minLength: 5,
                            },
                        },
                        inputProps: {
                            autoCapitalize: 'none',
                            marginBottom: '2',
                            value: service.name,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                handleServiceChange(index, 'name', e.target.value),
                        },
                    }}
                    control={control}
                    errorMessage={errors?.[`Name-${index}`]?.message}
                />
                <AppInput
                    key={`duration-${index}`}
                    input={{
                        key: `Duration-${index}`,
                        label: 'Duration',
                        color: '$white',
                        placeholder: 'Service Duration in e.g 15, 30, 45',
                        icon: { IoniconsName: 'timer-outline' },
                        rules: {
                            required: 'Duration is required',
                            pattern: {
                                minLength: 5,
                            },
                        },
                        inputProps: {
                            autoCapitalize: 'none',
                            marginBottom: '2',
                            value: service.duration,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                handleServiceChange(index, 'duration', e.target.value),
                        },
                    }}
                    control={control}
                    errorMessage={errors?.[`Duration-${index}`]?.message}
                />
                <AppInput
                    key={`price-${index}`}
                    input={{
                        key: `Price-${index}`,
                        label: 'Price',
                        color: '$white',
                        placeholder: 'Service Price e.g 60, 100, 200, etc',
                        icon: { MaterialIconsName: 'currency-rupee' },
                        rules: {
                            required: 'Price is required',
                            pattern: {
                                minLength: 5,
                            },
                        },
                        inputProps: {
                            autoCapitalize: 'none',
                            marginBottom: '2',
                            value: service.price,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                handleServiceChange(index, 'price', e.target.value),
                        },
                    }}
                    control={control}
                    errorMessage={errors?.[`Price-${index}`]?.message}
                />
            </VStack>
        ));
    };


    return (
        <>

            <Box m={'$2'} backgroundColor='$white' flex={1}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack justifyContent='space-between' mb={'$4'}>

                        <Box m={'$1'} mb={'$4'}>
                            <Heading fontSize={'$xl'} color={'$black'}>
                                Category and services
                            </Heading>
                        </Box>


                        <HStack justifyContent={'space-between'} alignItems={'center'} m={'$1'} mb={'$4'}>
                            <Heading fontSize={'$lg'} color={'$black'}>
                                Create Category
                            </Heading>

                            <Pressable $pressed={{ opacity: 0.5 }} onPress={() => setShowModal(true)}>
                                <Heading fontSize={'$lg'} color={'$blue500'} mr={'$2'}>
                                    Add New
                                </Heading>
                            </Pressable>
                        </HStack>

                        <HStack space={'md'} alignItems='center' mb={'$3'}>
                            <Box p={'$1'} px={'$4'} borderWidth={'$1'} borderRadius={'$full'} borderColor='$blue300'>
                                <Text fontSize={'$md'} bold color={'$black'}>
                                    Hair Cutting
                                </Text>
                            </Box>
                            <Box p={'$1'} px={'$4'} borderWidth={'$1'} borderRadius={'$full'} borderColor='$blue300'>
                                <Text fontSize={'$md'} bold color={'$black'}>
                                    Nail
                                </Text>
                            </Box>
                            <Box p={'$1'} px={'$4'} borderWidth={'$1'} borderRadius={'$full'} borderColor='$blue300'>
                                <Text fontSize={'$md'} bold color={'$black'}>
                                    Massage
                                </Text>
                            </Box>


                        </HStack>

                        <Box borderWidth={'$1'} borderColor={'$blue300'} backgroundColor='$white' borderRadius={'$xl'}>
                            <Box m={'$2'} mb={'$5'}>
                                {renderServiceInputs()}
                                <Box mt={'$4'}>
                                    <Pressable borderWidth={'$1'} onPress={handleAddService} borderColor='$blue400' alignItems='center' borderRadius={'$full'}>
                                        <Heading fontSize={'$lg'} color={'$white'}>
                                            <HStack alignItems={'center'} space={'xs'}>
                                                <Text color={'$blue500'} bold> Add another service </Text>
                                                <AppIcon FeatherName="plus" color={'blue'} size={20} />
                                            </HStack>
                                        </Heading>
                                    </Pressable>
                                </Box>
                            </Box>
                        </Box>

                    </VStack>

                </ScrollView>
                <Box >
                    <Btn bg={COLORS.theme[600]} _text={{ color: 'white', fontSize: '$sm' }} onPress={() => setShowModal(true)} ref={ref}>
                        <Heading color={'white'}>
                            <HStack alignItems={'center'} space={'xs'}>
                                <Text color={'white'} bold> Submit </Text>
                                <AppIcon FeatherName="log-in" color={'white'} size={20} />
                            </HStack>
                        </Heading>
                    </Btn>
                </Box>
            </Box >


            <Modal isOpen={showModal} onClose={() => setShowModal(false)} finalFocusRef={ref}>
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                        <Heading size="lg">Engage with Modals</Heading>
                        <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <Text>Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms, and media displays. Make an impact effortlessly.</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" size="sm" action="secondary" mr="$3" onPress={() => setShowModal(false)}>
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                        <Button size="sm" action="positive" borderWidth="$0" onPress={() => setShowModal(false)}>
                            <ButtonText>Explore</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </>
    );
};

export default BusinessInfo;
