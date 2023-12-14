
import {TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Size from "../models/size.model"
interface ButtonProps extends TouchableOpacityProps {
    title: string;
    size?:Size;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
  }
export default ButtonProps;