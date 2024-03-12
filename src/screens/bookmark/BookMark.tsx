
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import ItemCategory from "../../components/ItemCategory";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllBookMark } from "../../redux/thunks/BookMarkThunks";

export default function BookMark() {
  const isRefesh = useAppSelector(state => state.bookMarkReducer.isRefesh);
  const dispath = useAppDispatch()
  const listBookMark = useAppSelector(state => state.bookMarkReducer.listBookMark)

  useEffect(()=>{
    dispath(getAllBookMark())
  },[listBookMark.length])

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView  contentContainerStyle={{paddingBottom: 56}}
        refreshControl={
          <RefreshControl 
          refreshing={isRefesh}
          onRefresh={()=> dispath(getAllBookMark())}
          />
        } >
{listBookMark.map((item,index)=><ItemCategory key={index} title={item.id} url={item.url} desc={item.title}/>)}
            </ScrollView>
        </SafeAreaView>
    )
}


