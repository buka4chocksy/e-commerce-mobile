import React,{useEffect} from 'react'
import { View, Text,Image } from 'react-native'
import Img from '../../assets/images/logo.png'
import Style from './SplashStyle';
 const Splash = (props)=> {
     useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('Screen1');
        }, 1000)
     },[])
    return (
        <View style={Style.Container}>
        <View>
        <Image source={Img}/>
        </View>
        </View>
    )
}
export default Splash