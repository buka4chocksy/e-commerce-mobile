import React from 'react'
import { View, Text,Image ,TouchableOpacity} from 'react-native'
import Img from '../../../assets/images/logo.png'
import Img2 from '../../../assets/images/shirts.png'
import Img3 from '../../../assets/images/dot.png'
import Img4 from '../../../assets/images/dots.png'
import Style from './Screen2Style';
const Screen2=(props)=> {
    return (
        <View style={Style.Container}>
            <View style={Style.logoView}>
            <Image source={Img}/>
            </View>
            <View style={Style.logo2Style}>
            <Image source={Img2}/>
            </View>
            <View style={Style.text}>
            <Text style={Style.ScreenText2}>Wide Range of Items,</Text>
            <Text style={Style.ScreenText2}>Including Clothing</Text>
            </View>
            <View style={Style.loaderIcon}>
            <Image  style={Style.icon1} source={Img4}/>
            <Image style={Style.icon1} source={Img3}/>
            <Image  style={Style.icon1} source={Img4}/>
   
            </View>
            <View style={Style.SkipView}> 
            <TouchableOpacity  style={Style.skip} onPress={()=>{props.navigation.navigate("Screen3")}} >
            <Text style={Style.skip} >Skip</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen2
