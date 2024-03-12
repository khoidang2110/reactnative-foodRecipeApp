import {Image, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ItemFood from '../../../components/ItemFood';
import { style } from '../Style';
import { useGetTrendingMealQuery } from '../../../api/FoodAPI';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constant/constant';

export default function Trending() {

const navigator = useNavigation()

  const {data,isLoading} = useGetTrendingMealQuery();
 
  const onSendToDetailPage = (id:string)=>{
   navigator.push(SCREENS.DETAIL,{id})
  }

  return (
    <View style={style.cTrending}>
      <Text style={style.cTrendingTitle}>Trending Recipe</Text>
      <FlatList horizontal data={data?.meals ?? []} renderItem={({item}) => 
      <ItemFood 
      id={item.idMeal}
      onPress={onSendToDetailPage}
       url={item.strMealThumb} 
       category={item.strCategory}
       title={item.strMeal}
       tags={item.strArea}
       />}>
        {' '}
      </FlatList>
    </View>
  );
}
