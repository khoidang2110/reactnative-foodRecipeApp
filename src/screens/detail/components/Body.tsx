import {Image, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {IMAGES} from '../../../constant/constant';
import {style} from '../Style';
import { useRoute } from '@react-navigation/native';
import { PropsRouteDetail } from '../../../navigations/TypeCheck';
import { useGetCategoriesQuery, useGetDetailMealQuery } from '../../../api/FoodAPI';
import { Meal } from '../../../api/Type';


type Props ={
    meal?:Meal
}


export default function Body({meal}:Props) {



   

  return (
    <ScrollView style={style.bodyContainer} contentContainerStyle={{paddingBottom:24}}>
      <View style={style.hUserWrapper}>
        <Text style={style.bTitleText}>{meal?.strMeal} | {meal?.strArea}</Text>
        <Image source={IMAGES.avatar} style={style.circleAvatar} />
        <Image source={IMAGES.avatar} style={style.avatarLeft} />
        <Image source={IMAGES.avatar} style={style.avatarLeft} />
        <Image source={IMAGES.avatar} style={style.avatarLeft} />
      </View>

      <View style={style.hUserWrapper}>
        <Text style={style.subText}>{meal?.strCategory}</Text>
        <View>
          <Text style={[style.subText,style.textAlignRight]}>4 peoples</Text>
          <Text style={[style.subText,style.textAlignRight]}> Already try this !</Text>
        </View>
      </View>
      <Text style={style.cIngredientText}> Instruction</Text>
      <Text>{meal?.strInstructions}</Text>
      <View>
        <Text style={style.cIngredientText}>Ingredient</Text>
    
        <View style={style.cIngredientItem}>
          <Text>{meal?.strIngredient1}</Text>
          <Text>{meal?.strMeasure1}</Text>
        </View>
        <View style={style.cIngredientItem}>
          <Text>{meal?.strIngredient2}</Text>
          <Text>{meal?.strMeasure2}</Text>
        </View>
        <View style={style.cIngredientItem}>
          <Text>{meal?.strIngredient3}</Text>
          <Text>{meal?.strMeasure3}</Text>
        </View>
        <View style={style.cIngredientItem}>
          <Text>{meal?.strIngredient4}</Text>
          <Text>{meal?.strMeasure4}</Text>
        </View>
        <View style={style.cIngredientItem}>
          <Text>{meal?.strIngredient5}</Text>
          <Text>{meal?.strMeasure5}</Text>
        </View>
        <View style={style.cIngredientItem}>
          <Text>{meal?.strIngredient6}</Text>
          <Text>{meal?.strMeasure6}</Text>
        </View>
        <View style={style.cIngredientItem}>
          <Text>{meal?.strIngredient7}</Text>
          <Text>{meal?.strMeasure7}</Text>
        </View>
        

      </View>
    </ScrollView>
  );
}
