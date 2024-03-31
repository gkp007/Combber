import {
  Box,
  Button,
  ButtonText,
  HStack,
  LinearGradient,
  Pressable,
  Spinner,
  Text,
} from '@gluestack-ui/themed';
import AppIcon, {IconProps} from './AppIcon';
import {COLORS, WIDTH} from '../../styles';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';

type RowProps = React.ComponentProps<typeof HStack>;
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
} & RowProps;

const Btn: React.FC<BottomProps> = ({
  children,
  isLoading = false,
  isDisabled = false,
  colors,
  icon,
  onPress,
  _text,
  iconSide = 'LEFT',
  ..._row
}) => {
  const renderIcon = () => {
    if (isLoading) {
      return <Spinner size="small" />;
    }
    if (icon) {
      return <AppIcon {...icon} color={'#fff'} size={16} />;
    }
  };
  return (
    <Button
      // w={WIDTH / 2}
      w={'$64'}
      borderRadius="$full"
      // variant="solid"
      // action="primary"

      isDisabled={false}
      isFocusVisible={false}>
      <LinearGradient
        w={'$64'}
        colors={
          colors || [
            COLORS.secondary[900],
            COLORS.secondary[900],
            COLORS.secondary[600],
          ]
        }
        borderRadius="$full"
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        as={RNLinearGradient}>
        {iconSide === 'LEFT' && renderIcon()}

        {typeof children === 'string' ? (
          children
        ) : (
          <ButtonText m="$2" textAlign="center" {..._text}>
            {children}
          </ButtonText>
        )}

        {iconSide === 'RIGHT' && renderIcon()}
      </LinearGradient>
    </Button>
  );
};

export default Btn;
