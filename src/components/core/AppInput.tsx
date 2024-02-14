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
  TextareaInput,
} from '@gluestack-ui/themed';
import {fontFamily} from '../../../app.json';
import AppIcon, {IconProps} from './AppIcon';

type Props = {
  input: {
    key: string;
    label: string;
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
              <Input>
                <InputSlot>
                  <Box pl="$3">
                    {<AppIcon {...input.icon} color={'red'} size={20} />}
                  </Box>
                </InputSlot>
                <InputField
                  // type="password"
                  // defaultValue="12345"
                  placeholder={input.placeholder}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
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
