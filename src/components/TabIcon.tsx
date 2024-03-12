import {Image, Text, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../constant/constant';
import {style} from './Style';

type Props = {
  focused: boolean,
  icon:any
};

export default function TabIcon({focused,icon}: Props) {
  return (
    <View style={style.tabIconContainer}>
      <Image source={icon} style={focused ? style.tabIconSelected :style.tabIconUnSelected} />
      {focused && <View style={style.tabBottomLine}></View>}
    </View>
  );
}
