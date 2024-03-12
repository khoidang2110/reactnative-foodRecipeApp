import {Image, Text, View} from 'react-native';
import React from 'react';
import {ICONS, IMAGES} from '../constant/constant';
import {BlurView} from '@react-native-community/blur';
import {style} from './Style';
import { TouchableOpacity } from 'react-native-gesture-handler';


type Props={
  id:string,
  url:string,
  category:string,
  title:string,
  tags:string,
  onPress?:Function

}

export default function ItemFood(props:Props ) {
  return (
    <TouchableOpacity style={style.item} onPress={()=>{
      if(props.onPress != null) {
        props.onPress(props.id)
      }
    }}>
      <Image
        source={{uri:props.url}}
        resizeMode="cover"
        style={style.itemImage}
      />
      <View style={style.itemContent}>
        <View style={{backgroundColor:'rgba(52, 52, 52, 0.8)',borderRadius:10}}>
        <Text
            style={[
              style.itemTextColor,
              style.itemTitle,
              {padding: 10, borderRadius: 5},
            ]}>
            {props.category}
          </Text>
        </View>
        {/* <BlurView
          blurType="dark"
          blurAmount={90}
          overlayColor={'#00000000'}
          reducedTransparencyFallbackColor="white"
          blurRadius={10}
        >
          
        </BlurView> */}
    <View style={style.itemContainerContent}>
    <View style={{flex:1}}>
              <Text style={style.itemTextColor}>
                {props.title}
              </Text>
              <Text style={style.itemTextColor}>{props.tags}</Text>
            </View>
            <Image style={style.itemIcon} source={ICONS.bookmark} />
    </View>
        {/* <BlurView
          style={[{backgroundColor:'transparent'},style.itemContainerContent]}
          blurType="dark"
          blurAmount={90}
          overlayColor={'#00000000'}
          reducedTransparencyFallbackColor="white">
        
 
          
        </BlurView> */}
      </View>
    </TouchableOpacity>
  );
}
