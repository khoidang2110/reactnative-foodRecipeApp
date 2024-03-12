import { Image, Text, View } from "react-native";
import React from "react";
import ItemCategory from "../../../components/ItemCategory";
import { style } from "../Style";
import { useGetCategoriesQuery } from "../../../api/FoodAPI";





export default function Category() {


const data = useGetCategoriesQuery().data?.categories ?? []

    
    return (
        <View style={style.cCategory}>
            <View style={style.cCategoryTitleWrapper}>
            <Text style={style.cCategoryTitle}>Categories</Text>
            <Text>View All</Text>
            </View>
      {data.map((item,index)=><ItemCategory 
      key={index} 
      title={item.strCategory}
      url={item.strCategoryThumb}
      desc={item.strCategoryDescription}
      />)}
        </View>
    )
}