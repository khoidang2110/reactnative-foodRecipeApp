import {Image, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Body from './components/Body';
import {useRoute} from '@react-navigation/native';
import {PropsRouteDetail} from '../../navigations/TypeCheck';
import {useGetDetailMealQuery} from '../../api/FoodAPI';
import Toast from 'react-native-toast-message';
export default function Detail() {
  const route = useRoute<PropsRouteDetail>();
  const id = route.params?.id ?? '';
  const {data, isLoading} = useGetDetailMealQuery(id);

  const meal = data?.meals[0];
  console.log(data);

  return (
    <SafeAreaView style={{flex:1}}>
      <Header 
      url={meal?.strMealThumb ?? 'https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8='} 
       id={meal?.idMeal?? ''}
        title ={meal?.strMeal ?? ''}/>
      <Body meal={meal} />
      <Toast />
    </SafeAreaView>
  );
}
