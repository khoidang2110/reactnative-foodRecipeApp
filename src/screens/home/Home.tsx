import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toolbar from './components/Toolbar';
import {InputWithIcon} from '../../components/CustomInput';
import Search from './components/Search';
import {style} from './Style';
import Trending from './components/Trending';
import {ScrollView} from 'react-native-gesture-handler';
import Category from './components/Category';

export default function Home() {
  return (
    <SafeAreaView style={style.home}>
      <Toolbar />
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:56}}>
        <Search />
        <Trending />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
}
