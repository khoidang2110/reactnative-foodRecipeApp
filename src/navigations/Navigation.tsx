import {createStackNavigator} from '@react-navigation/stack';
import {ICONS, SCREENS} from '../constant/constant';
import SplashScreen from '../screens/splashscreen/SplashScreen';
import Home from '../screens/home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from '../screens/setting/Setting';
import Search from '../screens/search/Search';
import BookMark from '../screens/bookmark/BookMark';
import {useNavigation} from '@react-navigation/native';
import { Text } from 'react-native';
import TabIcon from '../components/TabIcon';
import Detail from '../screens/detail/Detail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SplashScreen} />
      <Stack.Screen name={SCREENS.DETAIL} component={Detail} />
      <Stack.Screen name={SCREENS.HOME} component={StackNavigation} />
      
    </Stack.Navigator>
  );
};

export const StackNavigation = () => (
  <Tab.Navigator screenOptions={{
    headerShown: false, 
    tabBarShowLabel: false,tabBarStyle:{
      position:'absolute',
      bottom:0,
      left:0,
      right: 0,
      elevation:1,
      height:56

    }}}>
    <Tab.Screen name={SCREENS.HOME} component={Home} options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.home}/>
    }}/>
    <Tab.Screen name={SCREENS.SEARCH} component={Search}  options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.search}/>
    }}/>
    <Tab.Screen name={SCREENS.BOOKMARK} component={BookMark}  options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.bookmark}/>
    }}/>
    <Tab.Screen name={SCREENS.SETTING} component={Setting}  options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.setting}/>
    }}/>
  </Tab.Navigator>
);
