import {Button, HStack, Pressable, Text} from '@gluestack-ui/themed';
import {IconProps} from './AppIcon';

type RowProps = React.ComponentProps<typeof HStack>;
type TextProps = React.ComponentProps<typeof Text>;

type BottomProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
  colors?: Array<string>;
  icon?: IconProps;
  iconSide?: 'LEFT' | 'RIGHT';
  onPress?: () => void;
  _text?: TextProps;
} & RowProps;

const Btn: React.FC<BottomProps> = ({children}) => {
  return (
    <Pressable>
      <Text>Btn</Text>
    </Pressable>
  );
};

export default Btn;
