import {Image, Text, View} from 'react-native';
import React from 'react';
import {ICONS, IMAGES, STORAGE_KEY} from '../../../constant/constant';
import {style} from '../Style';
import {BlurView} from '@react-native-community/blur';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../../navigations/TypeCheck';
import storage from '../../../storage/storage';
import Toast from 'react-native-toast-message';
import { BookMarkType } from '../../../api/Type';

type Props = {
  url: string,
  id: string,
  title: string
};

export default function Header({url,id,title}: Props) {
  const navigation = useNavigation<PropsPush>();

  const onBack = () => {
    navigation.pop();
  };

  const onBookmark = async () => {
    const dataBookmark:BookMarkType = {
      url,
      id,
      title,
    };
    try {
      const data:BookMarkType[] = await storage.load({key: STORAGE_KEY.bookmark});
      const filterData = data.filter(item => item.id==id)
      console.log('kiemtra',data)
      if(filterData.length==0){
        const newArrayData = [...data,dataBookmark]
        // console.log('kiemtra',newArrayData)
        storage.save({
            key:STORAGE_KEY.bookmark,
            data:newArrayData
        })
      }
Toast.show({
    type:'success',
    text1:'Bookmark success'
})
    } catch (error) {
      storage.save({
        key: STORAGE_KEY.bookmark,
        data: [dataBookmark],


      });
     
    }
  };
  return (
    <View>
      <Image source={{uri: url}} style={{height: 250}} resizeMode="cover" />
      <View style={style.headerAbsolute}>
        <View style={style.headerBack}>
          <TouchableOpacity onPress={onBack}>
            <Image source={ICONS.iconBack} style={style.iconWhite} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onBookmark}>
            <Image source={ICONS.bookmark} style={style.iconPrim} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            style.headerBack,
            style.padding20,
            {backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: 10},
          ]}>
          <View style={style.hUserWrapper}>
            <Image source={IMAGES.avatar} style={style.circleAvatar} />
            <View>
              <Text style={[style.textGray, style.paddingX]}>Recipe by</Text>
              <Text style={[style.textWhite, style.paddingX]}>Maria</Text>
            </View>
          </View>

          <Image source={ICONS.iconForward} style={style.iconWhite} />
        </View>
      </View>
    </View>
  );
}
