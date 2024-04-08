import React, {useMemo} from 'react';
import AppIcon, {IconProps} from '../../components/core/AppIcon';
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
  Button,
  ButtonIcon,
  EditIcon,
  Pressable,
} from '@gluestack-ui/themed';
import {useForm} from 'react-hook-form';
import {COLORS} from '../../styles';
import AppInput from '../../components/core/AppInput';
import {useNavigation} from '@react-navigation/native';
import {StackAndTabType} from '../../routes/private/types';
import Btn from '../../components/core/Btn';
import {PublicRouteProps} from '../../routes/public/types';
import {opacity} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
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

const Register = () => {
  const {goBack, navigate} = useNavigation<PublicRouteProps>();
  const formInputs: FormInput[] = useMemo(
    () => [
      {
        key: 'username',

        placeholder: 'UserName',
        icon: {IoniconsName: 'person'},
        rules: {
          required: 'EmpId is required',
          pattern: {
            value: /^[A-Z0-9._%+-]/i,

            message: 'Invalid Employee Id',
          },
        },
        inputProps: {keyboardType: 'email-address', autoCapitalize: 'none'},
      },
      {
        key: 'email',
        // label: 'Email',
        placeholder: 'Email address',
        icon: {FeatherName: 'mail'},
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
      {
        key: 'confirmPassword',
        // label: 'Password',
        placeholder: 'Confirm Password',
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
      <Pressable p="$3" m={'$3'} onPress={() => goBack()}>
        <AppIcon
          IoniconsName={'chevron-back-circle-outline'}
          color={'white'}
          size={32}
        />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Center>
          <Heading bold color="white" size="2xl">
            Register{' '}
          </Heading>
          <Text textAlign="center" size="sm" bold color="white">
            Create to your account.
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
            <Text size="sm" color="white" textAlign="center" p={'$3'}>
              By registering you're agreeing to our Terms of use and Private
              Policy.
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
              icon={{FeatherName: 'lock'}}
              backgroundColor="transparent"
              _text={{
                fontWeight: '$medium',
                fontSize: '$lg',
                color: '$white',
              }}>
              REGISTER
            </Btn>
            <HStack space={'sm'} justifyContent="center">
              <Text size="sm" color="white">
                Already have an Account?
              </Text>
              <Link alignItems="center" onPress={() => navigate('Login')}>
                <LinkText size="sm" color="white">
                  Login
                </LinkText>
              </Link>
            </HStack>
          </VStack>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default Register;
