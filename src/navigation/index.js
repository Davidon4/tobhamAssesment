import React, { useState, useEffect } from 'react';
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { loadFonts } from "../utils/loadFonts";
import { CartScreen, MenuScreen, DetailsScreen, HomeScreen, AccountScreen } from '../screens';
import {FONTS} from '../constants';
import { Home, Menu, MenuSolid, Cart, CartSolid } from '../../assets/svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const BottomTab = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused }) => {
//         let icon;

//         if (route.name === "HomeScreen") {
//           icon = focused
//             ?<Home/>
//             : <Home/>;
//         } else if (route.name === "MenuScreen") {
//           icon = focused
//             ? <MenuSolid/>
//             : <Menu/>
//         } else if (route.name === "CartScreen") {
//           icon = focused
//             ? <CartSolid/>
//             : <Cart/>
//         } else if (route.name === "AccountScreen") {
//           icon = focused
//             ? <CartSolid/>
//             : <Cart/>
//         }
//       },
//       headerShown: false,
//       tabBarShowLabel: false,
//       // tabBarStyle: { borderTopColor: colors.lightGrey },
//     })}
//   >
//     <Tab.Screen name="HomeScreen" component={HomeScreen} />
//     <Tab.Screen name="MenuScreen" component={MenuScreen} />
//     <Tab.Screen name="CartScreen" component={CartScreen} />
//     <Tab.Screen name="AccountScreen" component={AccountScreen} />
//   </Tab.Navigator>
// );

const StackScreen = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      async function loadAppFonts() {
        await loadFonts();
        setFontsLoaded(true);
      }
    
      loadAppFonts();
    }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Stack.Navigator
      initialRouteName='MenuScreen'
        screenOptions={{
          headerShown: true,
          ...TransitionPresets.SlideFromRightIOS}}>
          {/* <Stack.Screen options={{headerShown: false}} name="MenuScreen" component={MenuScreen} /> */}
          {/* <Stack.Screen name="Tabs" component={BottomTab} options={{ headerShown: false }} /> */}
          <Stack.Screen
              name="MenuScreen"
               component={MenuScreen}
               options={{
                title: 'Menu',
                headerStyle: {
                  // backgroundColor: '#E1E5E9',
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.3
                },
                // headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                  ...FONTS.black14Regular
                },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center'
              }}
             />
          <Stack.Screen
              name="CartScreen"
               component={CartScreen}
               options={{
                title: 'Cart',
                headerStyle: {
                  backgroundColor: '#b22222',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center'
              }}
             />
          <Stack.Screen
              name="DetailsScreen"
               component={DetailsScreen}
               options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#b22222',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center'
              }}
             />
      </Stack.Navigator>
  );
}

export default StackScreen;