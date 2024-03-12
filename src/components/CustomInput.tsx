
import {style} from './Style';
import {Image, View,TextInput} from 'react-native';
import {ICONS} from '../constant/constant';

type Props={
  onChangeText: Function 
}

export const InputWithIcon = ({onChangeText}:Props) => (
  <View  style={style.containerSearch} >
    <Image source={ICONS.search} style={style.icon}></Image>
    <TextInput  placeholder='Search' style={style.searchInput} onChangeText={(data)=>onChangeText(data)}/>
  </View>
);
