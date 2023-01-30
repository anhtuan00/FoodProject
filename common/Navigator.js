import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPage from '../src/screens/detail/DetailPage';
import HomePage from '../src/screens/home/HomePage';
import Like from '../src/screens/like/Like';
import Search from '../src/screens/search/Search';
import User from '../src/screens/user/User';
import {screens} from './Constant';
import {ICONS} from './Images';
import {COLORS} from './Theme';
import MainMenu from '../src/screens/menu/MainMenu';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="home"
    screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    <Stack.Screen name="home" component={BottomAppBarNavigator} />
    <Stack.Screen name="detail" component={DetailPage} />
  </Stack.Navigator>
);

export const BottomAppBarNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    <Tab.Screen
      name={screens.tab_home}
      component={MainMenu}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={ICONS.cutlery}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name={screens.tab_search}
      component={Search}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={ICONS.search}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name={screens.tab_like}
      component={Like}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={ICONS.like}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name={screens.tab_user}
      component={User}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={ICONS.user}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? COLORS.primary : COLORS.secondary,
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
