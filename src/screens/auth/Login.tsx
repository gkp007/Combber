import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Pressable,
  Spinner,
  Center,
} from '@gluestack-ui/themed';
import {useLoginMutation} from '../../service';

import React, {useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useWindowDimensions} from 'react-native';
import useAuth from '../../hooks/useAuth';
import {useToast} from '@gluestack-ui/themed';
import {PublicRouteProps} from '../../routes/public/types';
import AppIcon, {IconProps} from '../../components/core/AppIcon';
import useMutation from '../../hooks/useMutation';
import useSwrApi from '../../hooks/useSwrApi';
import {Alert} from '@gluestack-ui/themed';
import {IMAGES} from '../../assets';
import {COLORS, HEIGHT, WIDTH} from '../../styles';
import AppInput from '../../components/core/AppInput';
import Btn from '../../components/core/Btn';
import {Toast} from '@gluestack-ui/themed';
import {ScrollView} from 'react-native-gesture-handler';

type FormInput = {
  key: string;
  label?: string;
  placeholder: string;
  icon: IconProps;
  rules: Object;
  inputProps?: any;
};

type FormData = {
  [key: string]: string;
};

export default function Login(): JSX.Element {
  // const handleRegistration = (data: FormData) => {
  //   try {
  //     Toast({
  //       title: true ? 'Registration Successful!' : 'Registration Failed',
  //       duration: 5000,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [Login, {isError, isSuccess, data, error, reset, isLoading}] =
    useLoginMutation();
  const toast = useToast();
  const [isPhone, setIsPhone] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [visible, setVisible] = useState(false);
  const {navigate} = useNavigation<PublicRouteProps>();
  const {height} = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const {setUser, getUser, setToken} = useAuth();
  // const {mutation: login, isLoading} = useMutation();
  const {mutation: gmail, isLoading: isGmailValidating} = useMutation();
  const {mutation: gLogin} = useMutation();
  let objData: any = {};

  const onSubmit = async (data: any) => {
    console.log('===>', data);
    Login({
      email: data?.Email,
      password: data?.password,
    });
  };

  console.log('---', data);
  console.log({error});

  // const {data, error, isValidating} = useSwrApi(`auth/google/select-profile`);

  // console.log(data, 'data');

  // const handleLogin = async (formData: FormData) => {
  //   try {
  //     const {mobile} = formData;
  //     // console.log('Mobile Number:', mobile);
  //     // console.log('Mobile Number:', selectedCountry.name);
  //     // console.log('Mobile Number:', selectedCountry.phone);
  //     objData = {
  //       phone: mobile,
  //     };
  //     const res = await login(`auth/register-with-phone`, {
  //       isAlert: true,
  //       body: objData,
  //     });
  //     // console.log(res, 'res');
  //     // console.log(res?.results?.success, 'success');
  //     // console.log(res?.results?.data?.token, 'token');

  //     console.log('615216');
  //     if (res?.results?.success && res?.results?.data?.token) {
  //       setToken(res?.results?.data?.token);

  //       navigate('OTPScreen', {
  //         token: res?.results?.data?.token,
  //         objData,
  //       });
  //     }
  //     // console.log(res);
  //   } catch (error) {
  //     Alert(
  //       `${error instanceof Error ? error?.message : 'Something Went wrong'}`,
  //     );
  //   }
  // };

  // const handleLoginWithGmail = async (data: FormData) => {
  //   const {username, password} = data;
  //   try {
  //     let objData = {email: username, password: password};
  //     const res = await gmail(`auth/register-with-email-and-password`, {
  //       body: {
  //         email: username,
  //         password,
  //       },
  //     });
  //     console.log(res);
  //     if (
  //       res?.results?.success &&
  //       res?.results?.data?.token &&
  //       res?.results?.data?.otp
  //     ) {
  //       setToken(res?.results?.data?.token);
  //       await gLogin(`auth/verify-email-or-phone`, {
  //         body: {
  //           token: res?.results?.data?.token,
  //           otp: res?.results?.data?.otp,
  //         },
  //       });
  //       toast.show({
  //         title: res?.results?.success
  //           ? 'Register Successful login your account !!!!'
  //           : 'Login Failed',
  //         duration: 5000,
  //       });

  //       navigate('Login');
  //     }
  //   } catch (error) {
  //     Alert(
  //       `${error instanceof Error ? error?.message : 'Something Went wrong'}`,
  //     );
  //   }
  // };

  const formInputs1: FormInput[] = useMemo(
    () => [
      // {
      //   key: 'mobile',
      //   label: undefined,
      //   placeholder: 'Enter your mobile number',
      //   icon: {IoniconsName: 'call-outline', color: 'gray'},
      //   rules: {
      //     required: 'Mobile number is required',
      //     pattern: {
      //       value: /^[0-9]{10}$/,
      //       message: 'Invalid mobile number',
      //     },
      //   },
      //   inputProps: {
      //     keyboardType: 'numeric',
      //     autoCapitalize: 'none',
      //     variant: 'underlined',
      //   },
      // },
      {
        key: 'Email',
        label: undefined,
        placeholder: 'Enter your email address',
        icon: {FeatherName: 'mail'},
        rules: {
          required: 'Username is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        },
        inputProps: {
          keyboardType: 'email-address',
          autoCapitalize: 'none',
          marginBottom: '2',
        },
      },
      {
        key: 'password',
        label: undefined,
        placeholder: 'Password',
        icon: {FeatherName: 'lock'},
        rules: {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        },
        inputProps: {
          secureTextEntry,
          rightElement: (
            <Btn
              colors={['#fff', '#fff']}
              _text={{color: 'black', fontSize: '$xs'}}
              onPress={() => setSecureTextEntry(!secureTextEntry)}>
              {secureTextEntry ? 'Show' : 'Hide'}
            </Btn>
          ),
        },
      },
      // {
      //   key: 'ConfirmPassword',
      //   label: undefined,
      //   placeholder: 'Confirm Password',
      //   icon: {FeatherName: 'lock'},
      //   rules: {
      //     required: 'Password is required',
      //     confirmPassword: {
      //       value: 'password',
      //       message: 'Password does not match',
      //     },
      //     minLength: {
      //       value: 6,
      //       message: 'Password must be at least 6 characters long',
      //     },
      //   },
      //   inputProps: {
      //     secureTextEntry,
      //     rightElement: (
      //       <Btn
      //         colors={['#fff', '#fff']}
      //         _text={{color: 'black', fontSize: '$xs'}}
      //         onPress={() => setSecureTextEntry(!secureTextEntry)}>
      //         {secureTextEntry ? 'Show' : 'Hide'}
      //       </Btn>
      //     ),
      //   },
      // },
    ],
    [secureTextEntry],
  );

  return (
    <Box flex={1} height={HEIGHT} bg="#fff">
      <ScrollView>
        <Center p={WIDTH * 0.004}>
          <Image
            w="$56"
            h="$56"
            source={IMAGES.ONBOARDING}
            alt="logo"
            alignSelf="center"
          />
          <VStack justifyContent={'space-between'} w={'$full'}>
            <Box px="$4">
              <Heading fontSize={18} color={'black'}>
                Login with us
              </Heading>

              <Text fontSize={10} color={'blue.500'}>
                Login to continue using app
              </Text>
            </Box>

            <VStack space={'md'}>
              <Box px="$4">
                {formInputs1.map(input => (
                  <AppInput
                    input={input}
                    key={input.key}
                    control={control}
                    errorMessage={errors?.[input?.key]?.message}
                  />
                ))}

                <Text size="sm" color={'blue.500'} bold alignSelf="flex-end">
                  Forgot Password?
                </Text>
              </Box>

              <Box mx={15}>
                <Btn
                  bg={COLORS.theme[600]}
                  onPress={handleSubmit(onSubmit)}
                  _text={{color: 'white', fontSize: '$sm'}}>
                  <Heading fontSize={15} color={'white'}>
                    {isLoading || isGmailValidating ? (
                      <Spinner size={'small'} color={'white'} />
                    ) : (
                      <HStack alignItems={'center'} space={'xs'}>
                        <Text color={'white'} bold>
                          {' '}
                          Submit{' '}
                        </Text>
                        <AppIcon
                          FeatherName="log-in"
                          color={'white'}
                          size={20}
                        />
                      </HStack>
                    )}
                  </Heading>
                </Btn>
              </Box>
            </VStack>

            <HStack alignItems="center" flexDirection="row" mx={'$5'}>
              <Text fontSize="$xs" fontWeight="400">
                Don't Have an account?
              </Text>
              <Btn
                colors={['#fff', '#fff']}
                // onPress={() => navigate('Login', {objData})}
                _text={{
                  color: 'black',
                  fontSize: '$xs',
                  bold: true,
                }}>
                Register
              </Btn>
            </HStack>

            <>
              <Text mb={2} textAlign={'center'}>
                - Or -
              </Text>

              <Pressable
                $pressed={{opacity: 0.8}}
                w={'92%'}
                py={1.5}
                borderColor={'blue.800'}
                rounded={'$full'}
                bg={'white'}
                alignSelf={'center'}
                justifyContent={'center'}
                alignItems={'center'}
                borderWidth={0.3}>
                <HStack
                  alignItems={'center'}
                  justifyContent={'center'}
                  space={'md'}>
                  <Image
                    source={IMAGES.GOOGLE}
                    resizeMode={'contain'}
                    h="$5"
                    w="$6"
                    bg={'transparent'}
                    alt="Logo"
                  />
                  <Heading fontSize={15} py={1} color={'gray'}>
                    Register With Google
                  </Heading>
                </HStack>
              </Pressable>
            </>

            <Box alignItems={'center'}>
              <HStack>
                <Text fontSize={11} color="gray.500">
                  By continuing, you agree to our{' '}
                </Text>
                <Pressable $pressed={{opacity: 0.6}}>
                  <Text fontSize={12} color="red.500" underline>
                    Terms and Conditions
                  </Text>
                </Pressable>
              </HStack>
              <HStack>
                <Text fontSize={11} color="gray.500">
                  and{' '}
                </Text>
                <Pressable $pressed={{opacity: 0.6}}>
                  <Text fontSize={12} color="red.500" underline>
                    Privacy Policy
                  </Text>
                </Pressable>
              </HStack>
            </Box>
          </VStack>
        </Center>
      </ScrollView>
    </Box>
  );
}
