import {View, Text} from 'react-native';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  AlertCircleIcon,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputSlot,
  Textarea,
  HStack,
  TextareaInput,
  LinearGradient,
} from '@gluestack-ui/themed';
import {fontFamily} from '../../../app.json';
import AppIcon, {IconProps} from './AppIcon';
import {COLORS} from '../../styles';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';
type Props = {
  input: {
    key: string;
    label?: string;
    placeholder: string;
    rules: Object;
    icon: IconProps;
    textArea?: boolean;
  };
  errorMessage?: any;
  control: Control<any, any>;
};

export default function AppInput({input, errorMessage, control}: Props) {
  return (
    <Controller
      control={control}
      name={input.key}
      rules={input.rules}
      render={({field: {onBlur, onChange, value}}) => (
        <FormControl
          size="md"
          // isDisabled={false}
          isInvalid={Boolean(errorMessage)}
          // isReadOnly={false}
          // isRequired={false}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText fontFamily={`${fontFamily}-Regular`}>
              {input.label}
            </FormControlLabelText>
          </FormControlLabel>
          {!input?.textArea ? (
            <>
              <Input
                borderLeftWidth={'$1'}
                borderWidth={'$0'}
                borderLeftColor={'$white'}
                size="sm"
                h={'$12'}
                bgColor={COLORS.primary[200]}
                borderRadius={'$xl'}>
                <LinearGradient
                  w={'$full'}
                  colors={[
                    COLORS.secondary[50],
                    COLORS.theme[100],
                    COLORS.theme[200],
                  ]}
                  borderRadius="$md"
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  as={RNLinearGradient}>
                  <InputSlot position={'absolute'} top={'$0'}>
                    <Box p="$3" w={'$full'}>
                      {<AppIcon {...input.icon} color={'#13285A'} size={20} />}
                    </Box>
                  </InputSlot>
                  <InputField
                    alignSelf={'center'}
                    left={'$10'}
                    bgColor={'$transparent'}
                    position={'absolute'}
                    // type="password"
                    // defaultValue="12345"
                    placeholder={input.placeholder}
                    placeholderTextColor={'#13285A'}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                </LinearGradient>
              </Input>

              <>{console.log('first', errorMessage)}</>
            </>
          ) : (
            <Textarea size="md" w="$64">
              <InputSlot>
                <Box pl="$3">
                  {<AppIcon {...input.icon} color={'red'} size={20} />}
                </Box>
              </InputSlot>
              <TextareaInput placeholder={input.placeholder} />
            </Textarea>
          )}

          <FormControlError mt="$1">
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{errorMessage}</FormControlErrorText>
          </FormControlError>
        </FormControl>
      )}
    />
  );
}
