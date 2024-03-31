import {
  Box,
  Button,
  ButtonText,
  HStack,
  LinearGradient,
  Pressable,
  Spinner,
  Text,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import AppIcon, {IconProps} from './AppIcon';
import {COLORS} from '../../styles';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';
import React from 'react';

type ButtonProps = React.ComponentProps<typeof Button>;
type TextProps = React.ComponentProps<typeof Text>;

type BottomProps = {
  children: JSX.Element | string;
  isLoading?: boolean;
  isDisabled?: boolean;
  colors?: Array<string>;
  icon?: IconProps;
  iconSide?: 'LEFT' | 'RIGHT';
  onPress?: () => void;
  _text?: TextProps;
  // backgroundColor?: string;
} & ButtonProps;

const Btn: React.FC<BottomProps> = ({
  children,
  isLoading = false,
  isDisabled = false,
  colors = [
    COLORS.secondary[900],
    COLORS.secondary[900],
    COLORS.secondary[600],
  ],
  icon,
  onPress,
  _text,
  iconSide = 'LEFT',
  // backgroundColor = 'transparent',
  ..._button
}) => {
  const renderIcon = React.useMemo(
    () => icon && <AppIcon {...icon} color="#fff" size={16} />,
    [icon],
  );

  return (
    <>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        borderRadius="$full"
        as={RNLinearGradient}>
        <Button
          {..._button}
          onPress={onPress}
          borderRadius="$full"
          $hover-bg="$success800"
          // backgroundColor={backgroundColor}
          isDisabled={isLoading || isDisabled}
          isFocusVisible={false}>
          {iconSide === 'LEFT' && renderIcon}
          {isLoading ? (
            <>
              <ButtonSpinner mr="$1" />
              <ButtonText>Please wait...</ButtonText>
            </>
          ) : typeof children === 'string' ? (
            <ButtonText>{children}</ButtonText>
          ) : (
            children
          )}

          {iconSide === 'RIGHT' && renderIcon}
        </Button>
      </LinearGradient>
    </>
  );
};

export default Btn;
