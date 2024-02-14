import React, {useMemo} from 'react';
import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Text,
} from '@gluestack-ui/themed';
import AppIcon, {IconProps} from './components/core/AppIcon';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AppInput from './components/core/AppInput';
import {useForm} from 'react-hook-form';

type FormInput = {
  key: string;
  label: string;
  placeholder: string;
  icon: IconProps;
  rules: Object;
  // inputProps?: IInputProps;
};
const Router = () => {
  const formInputs: FormInput[] = useMemo(
    () => [
      {
        key: 'username',
        label: 'Email',
        placeholder: 'Enter registration email address',
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
    ],
    [],
  );
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const handle = (data: FormData) => {
    console.log('iiii');
  };
  return (
    <Box flex={1} bg={'white'}>
      <Text bold size={'lg'} color="red">
        Router hghg
      </Text>
      <Fontisto
        name="bell"
        size={25}
        style={{marginTop: 30, marginLeft: 110}}
      />
      <AppIcon AntDesignName="star" size={13} color={'red'} />
      {/* <Box>ghh</Box> */}
      {/* <AntDesign name="star" size={13} color={'#FFD700'}/> */}
      {formInputs.map(input => (
        <>
          {/* {console.log('mmm', errors?.[input?.key]?.message)} */}
          <AppInput
            input={input}
            key={input.key}
            control={control}
            // {console.log('mmm', errors?.[input?.key]?.message)}
            errorMessage={errors?.[input?.key]?.message}
          />
        </>
      ))}
      <Button
        size="md"
        mt={'$1/2'}
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={handleSubmit(handle)}>
        <ButtonText>Add </ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </Box>
  );
};

export default Router;
