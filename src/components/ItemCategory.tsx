import {Image, Text, View} from 'react-native';
import React from 'react';

import {style} from './Style';




type Props = {
    url:string,
    title:string,
    desc?: string
}


export default function ItemCategory({url,desc,title}:Props) {
  return (
    <View style={style.itemContainerCategory}>
      <Image
        source={{uri:url}}
        style={style.ItemCategoryImage}
        resizeMode='contain'
      />
      <View style={style.itemCategoryWrapper}>
        <Text style={style.itemCategoryTitle}>{title}</Text>
        <Text numberOfLines={1}>{desc}</Text>
      </View>
    </View>
  );
}
