import React , {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash/Splash';
import Screen1 from '../screens/OnBoarding/Screen1/Screen1';
import Screen2 from '../screens/OnBoarding/Screen2/Screen2';
import Screen3 from '../screens/OnBoarding/Screen3/Screen3';
import Login from '../screens/Auth/Login/Login';
import Register from '../screens/Auth/Register/Register';
import BottomTab from '../navigation/Bottomnav'
import { View } from 'react-native';

let Stack = createStackNavigator()
const MainNavigation = (props)=>{
    return(
        <>
        <Stack.Navigator  screenOptions={{
                headerShown: false
            }}>
        <Stack.Screen  name={'SplashScreen'} component={SplashScreen}/>
        <Stack.Screen  name={'Screen1'} component={Screen1}/>
        <Stack.Screen  name={'Screen2'} component={Screen2}/>
        <Stack.Screen  name={'Screen3'} component={Screen3}/>
        <Stack.Screen  name={'Login'} component={Login}/>
        <Stack.Screen  name={'Register'} component={Register}/>
        <Stack.Screen name={'BottomTab'} component={BottomTab}/>

        </Stack.Navigator>
        </>

    )
}
export default MainNavigation