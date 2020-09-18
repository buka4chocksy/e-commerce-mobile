import React ,{useState}from 'react'
import { View, Text,Image ,TextInput,TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/Dashboard';
import Colors from '../../src/Theme/Colors';
import Home from '../assets/images/Vector.png'
const Tab = createBottomTabNavigator();

const BottomTab =(props)=> {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'red',
      style:{
        backgroundColor:Colors.textColor,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        padding:30
      }
    }}
    >
      <Tab.Screen 
      name="Dashboard" 
      options={{
        tabBarLabel:"",
        tabBarOptions:()=>{
          
        },
        tabBarIcon: ({ color, size }) => (
          <TouchableOpacity onPress={()=>{ alert('hello')}}>
          <Image source={Home} />
          </TouchableOpacity>
        ),
      }} 
      component={Dashboard} />
      
    </Tab.Navigator>
  );
}
export default BottomTab