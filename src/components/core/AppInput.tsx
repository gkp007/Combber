import React from 'react';
import { Control, Controller } from 'react-hook-form';
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
  TextareaInput,
} from '@gluestack-ui/themed';
import { fontFamily } from '../../../app.json';
import AppIcon, { IconProps } from './AppIcon';
import { COLORS } from '../../styles';
type Props = {
  input: {
    key: string;
    label?: string;
    placeholder: string;
    rules: Object;
    icon: IconProps;
    textArea?: boolean;
  };
  colors?: any[];
  errorMessage?: any;
  control: Control<any, any>;
};

export default function AppInput({
  input,
  colors = [COLORS.secondary[50], COLORS.theme[100], COLORS.theme[200]],
  errorMessage,
  control,
}: Props) {
  return (
    <Controller
      control={control}
      name={input.key}
      rules={input.rules}
      render={({ field: { onBlur, onChange, value } }) => (
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
                borderWidth={'$1'}
                borderRightColor={'$grey200'}
                borderLeftColor={'$grey200'}
                borderRightWidth={"$1"}
                size="sm"
                h={'$12'}
                // bg={'$blue50'}
                borderRadius={'$xl'}>
                <InputSlot position={'absolute'} top={'$0'}>
                  <Box p="$3">
                    {<AppIcon {...input.icon} color={'black'} size={20} />}
                  </Box>
                </InputSlot>
                <InputField
                  $focus-w={'$full'}
                  alignSelf={'center'}
                  w={'$full'}
                  left={'$10'}
                  bgColor={'$white'}
                  placeholder={input.placeholder}
                  placeholderTextColor={'gray'}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              </Input>
            </>
          ) : (
            <Textarea size="md" w="$64">
              <InputSlot>
                <Box pl="$3">
                  {<AppIcon {...input.icon} color={'$red100'} size={20} />}
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
