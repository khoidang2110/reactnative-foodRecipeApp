import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';

import {InputWithIcon} from '../../../components/CustomInput';
import {style} from '../Style';
import {IMAGES, SCREENS} from '../../../constant/constant';
import {useSearchMealByNameQuery} from '../../../api/FoodAPI';
import { useNavigation } from '@react-navigation/native';
import { PropsPush } from '../../../navigations/TypeCheck';

export default function Search() {
  const [textSearch, setTextSearch] = useState('');

  let textData = ''
  var timeOutId:NodeJS.Timeout

  const navigation = useNavigation<PropsPush>()
const _onChangeText=(text:string)=>{
textData = text
     if(timeOutId){
 clearTimeout(timeOutId)
     }
     timeOutId = setTimeout(()=>{
        navigation.navigate(SCREENS.SEARCH,{dataSearch:text})
     },2000)
}

  //c2
//   const {isLoading, data} = useSearchMealByNameQuery(textSearch);
//   console.log(data);

// var timeOutId:NodeJS.Timeout

//   const _onChangeText = (text: string) => {

//     if(timeOutId){
// clearTimeout(timeOutId)
//     }
//     timeOutId = setTimeout(()=>setTextSearch(text),2000)

//   };

  return (
    <View style={style.search}>
      <InputWithIcon onChangeText={_onChangeText} />
      <View style={style.cHintRecipe}>
        <Image source={IMAGES.recipeBookMark} style={{width: 80, height: 80}} />
        <View style={{flex: 1}}>
          <Text> You have 12 recipes that you haven't tried yet</Text>
          <Text style={style.cHintRecipeLink}>See recipes</Text>
        </View>
      </View>
    </View>
  );
}
