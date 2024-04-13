import { HStack, Input } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react';

import { TextInput } from 'react-native';

type OTPInputProps = {
    length: number;
    disabled?: boolean;
    onChange(value: any): void;
};



export default function OtpInput({
    length,
    disabled,
    onChange,
}: OTPInputProps): JSX.Element {
    const inputRefs = useRef<Array<TextInput | null>>([]);
    const [inputValues, setInputValues] = useState<string[]>(
        Array(length).fill(''),
    );
    console.log({ inputValues });
    const handleChange = (text: string, index: number) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = text;
        setInputValues(newInputValues);
        onChange(newInputValues.join(''));
        if (text.length !== 0 && index < length - 1) {
            // Focus the next input if there is text and it's not the last input789
            inputRefs.current[index + 1]?.focus();
        } else if (text.length === 0 && index > 0) {
            // Focus the previous input on backspace if it's not the first input
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <>
            <HStack w={'100%'} justifyContent={'space-between'} my={20}>
                {[...new Array(length)].map((item, index) => (
                    <Input
                        ref={ref => {
                            if (ref && !inputRefs.current.includes(ref)) {
                                inputRefs.current = [...inputRefs.current, ref];
                            }
                        }}
                        key={index}
                        maxLength={1}
                        contextMenuHidden
                        selectTextOnFocus
                        editable={!disabled}
                        value={inputValues[index]}
                        testID={`OTPInput-${index}`}
                        keyboardType="decimal-pad"
                        fontSize={22}
                        w={'$16'}
                        h={'$12'}
                        bg={'white'}
                        borderRadius={5}
                        borderColor={'gray.100'}
                        borderWidth={'$0'}
                        bgColor='#DDDDDD'
                        color={'black'}
                        textAlign={'center'}
                        onChangeText={(text: string) => handleChange(text, index)}
                    />
                ))}
            </HStack>
        </>
    );
}
