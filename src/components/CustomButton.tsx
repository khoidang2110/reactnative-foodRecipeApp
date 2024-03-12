import {Text, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {style} from './Style';

type Props = {
  title: string,
  style?: ViewStyle,
  onPress?:any,
};

export const PrimaryButton = (props: Props) => (
  <TouchableOpacity style={[style.btnPrimary,props.style]} onPress={props.onPress}>
    <Text style={style.textWhite}>{props.title}</Text>
  </TouchableOpacity>
);


export const OutlineButton = (props:Props)=>(
    <TouchableOpacity style={[style.btnOutline,props.style]}>
    <Text style={style.textWhite}>{props.title}</Text>
  </TouchableOpacity>
)
