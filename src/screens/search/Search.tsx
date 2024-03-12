import { Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { PropsRouteSearch } from "../../navigations/TypeCheck";
import { useSearchMealByNameQuery } from "../../api/FoodAPI";


export default function Search() {

    
    const params = useRoute<PropsRouteSearch>().params
    const {data,isLoading} = useSearchMealByNameQuery(params.dataSearch)
  
    return (
        <View>
            <Text>Search</Text>
        </View>
    )
}