import React, {useMemo} from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Link,
  HStack,
  LinkText,
  VStack,
  Image,
  ScrollView,
  Pressable,
} from '@gluestack-ui/themed';

import {useForm} from 'react-hook-form';
import {COLORS, HEIGHT, WIDTH} from '../../styles';
import AppInput from '../../components/core/AppInput';
import AppIcon, {IconProps} from '../../components/core/AppIcon';
import Btn from '../../components/core/Btn';
import {IMAGES} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {PublicRouteProps} from '../../routes/public/types';

type FormInput = {
  key: string;
  label?: string;
  placeholder: string;
  icon: IconProps;
  rules: Object;
  // inputProps?: IInputProps;
};
type FormData = {
  [key: string]: string;
};
const Login = () => {
  const {goBack, navigate} = useNavigation<PublicRouteProps>();
  const formInputs: FormInput[] = useMemo(
    () => [
      {
        key: 'username',
        // label: 'Email',
        placeholder: 'Email address',
        icon: {IoniconsName: 'person'},
        rules: {
          required: 'Email address is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        },
        // inputProps: {keyboardType: 'email-address', autoCapitalize: 'none'},
      },
      {
        key: 'password',
        // label: 'Password',
        placeholder: 'Enter Password',
        icon: {EntypoName: 'lock'},
        rules: {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Invalid Password',
          },
        },
      },
    ],
    [],
  );
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  return (
    <Box bg={COLORS.theme[600]} flex={1}>
      <Pressable
        p="$3"
        m={'$3'}
        bg={COLORS.theme[600]}
        $hover-bg="$primary400"
        w={'$12'}
        onPress={() => goBack()}
        borderRadius={'$3xl'}
        borderWidth={'$1'}
        borderColor="#fff">
        <AppIcon AntDesignName={'left'} color={'white'} size={20} />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Box
          position="absolute"
          alignSelf="center"
          bg={'$amber400'}
          borderRadius={'$full'}
          overflow="hidden"
          bottom={'$32'}
          alignItems="center"
          justifyContent="flex-end"
          h={WIDTH}
          w={WIDTH * 1.1}>
          <Image
            source={IMAGES.LOGIN_1}
            alt="login"
            w={'$full'}
            h={'$full'}
            resizeMode={'contain'}
          />
        </Box> */}
        <Center>
          <Heading bold color="white" size="2xl">
            Welcome Back{' '}
          </Heading>
          <Text textAlign="center" size="sm" bold color="white">
            Login to your account.
          </Text>
          <Box mb={'$5'} mx={'$8'}>
            {formInputs.map(input => (
              <AppInput
                input={input}
                key={input.key}
                control={control}
                // {console.log('mmm', errors?.[input?.key]?.message)}
                errorMessage={errors?.[input?.key]?.message}
              />
            ))}
            <Text size="sm" color="white" textAlign="right" pt={'$3'}>
              Forgot Password ?
            </Text>
          </Box>
          <VStack
            alignSelf="center"
            space={'sm'}
            mb={'$5'}
            w={'$full'}
            px={'$8'}>
            <Btn
              w={'$full'}
              h={'$12'}
              iconSide={'RIGHT'}
              onPress={() => navigate('Splash')}
              icon={{FeatherName: 'lock'}}
              backgroundColor="transparent"
              _text={{
                fontWeight: '$medium',
                fontSize: '$lg',
                color: '$white',
              }}>
              LOGIN
            </Btn>
            <HStack space={'sm'} justifyContent="center">
              <Text size="sm" color="white">
                Don't have an Account?
              </Text>
              <Link alignItems="center" onPress={() => navigate('Register')}>
                <LinkText size="sm" color="white">
                  Sign Up
                </LinkText>
              </Link>
            </HStack>
          </VStack>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default Login;
