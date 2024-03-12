import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SCREENS, TEXT} from '../../constant/constant';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './Style';
import { OutlineButton, PrimaryButton } from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { MainStackParams, PropsPush } from '../../navigations/TypeCheck';

export default function SplashScreen() {


  const navigation = useNavigation();
  const onPressItem = () =>{
    navigation.push(SCREENS.HOME);
      console.log('click')
        }
  return (
    <View style={style.container}>
      {/* <Image source={IMAGES.backgroundSlashScreen}  /> */}
      <ImageBackground
        source={IMAGES.backgroundSlashScreen}
        resizeMode="cover"
        style={style.container}
      />

      <LinearGradient
        colors={[COLORS.transparent, COLORS.black]}
        style={style.absolute}>
        <View style={[style.absolute, style.containerContent]}>
          <Text style={style.title}>Cooking a Delicious Food Easily</Text>
          
          <Text style={style.subTitle}> Discover more than 1200 food recipes in your hands and cooking it easily !</Text>
       <PrimaryButton title={TEXT.LOGIN} style={style.mtLarge} onPress={()=>onPressItem()} />
       <OutlineButton title={TEXT.SIGNUP} style={style.mtSmall}/>
        </View>
      </LinearGradient>
    </View>
  );
}
