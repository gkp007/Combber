import React, {useMemo} from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Link,
  HStack,
  LinkText,
  Image,
} from '@gluestack-ui/themed';

import {useForm} from 'react-hook-form';
import {COLORS, WIDTH} from '../../styles';
import AppInput from '../../components/core/AppInput';
import {IconProps} from '../../components/core/AppIcon';
import Btn from '../../components/core/Btn';
import {IMAGES} from '../../assets';

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
    <Box bg={COLORS.theme[500]} flex={1}>
      <Box borderRadius={'$full'} rounded={20}>
        <Image
          source={IMAGES.LOGIN_1}
          alt="login"
          w={'$full'}
          h={'$80'}
          bottom={'$6'}
          resizeMode={'contain'}
        />
      </Box>
      {/* <Image
            source={IMAGES.LOGO}
            resizeMode={'contain'}
            w={'full'}
            h="32"
            alt="Logo"
            my="2"
          /> */}
      <Center w={WIDTH}>
        <Heading bold color="white" size="xl">
          Welcome Back{' '}
        </Heading>
        <Text textAlign="center" size="lg" bold color="white">
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
          <HStack space={'sm'} justifyContent="center" mt={'$5'}>
            <Text size="sm" color="white">
              Don't have an Account?
            </Text>
            <Link alignItems="center">
              <LinkText size="sm" color="white">
                Sign Up
              </LinkText>
            </Link>
          </HStack>
          <Box alignSelf="center" mt={'$6'}>
            <Btn

            // iconSide={'RIGHT'}
            // icon={{FeatherName: 'lock'}}
            // colors={[
            //   COLORS.secondary[50],
            //   COLORS.theme[100],
            //   COLORS.theme[200],
            // ]}
            >
              <Text fontWeight="$medium" fontSize="$lg" color="$textLight100">
                LOGIN
              </Text>
            </Btn>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Login;
