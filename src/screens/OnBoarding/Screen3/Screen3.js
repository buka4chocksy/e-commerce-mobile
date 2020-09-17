import React from 'react'
import { View, Text,Image ,TouchableOpacity} from 'react-native'
import Img from '../../../assets/images/logo.png'
import Img2 from '../../../assets/images/phone.png'
import Img3 from '../../../assets/images/dot.png'
import Img4 from '../../../assets/images/dots.png'
import Tags from '../../../assets/images/tag.png'
import Tags2 from '../../../assets/images/tag2.png'
import Style from './Screen3Style';
const Screen3=(props)=> {
    return (
        <View style={Style.Container}>
        <View style={Style.logoView}>
        <Image source={Img}/>
        </View>
        <View style={Style.logo2Style}>
        <View style={Style.pricetag}>
            <Text style={Style.tagPrice2}>.</Text>
            <Text style={Style.tagPrice}>$10k</Text>
            </View>
            <Image source={Img2}/>
            <View style={Style.backIcon}>
            <Image source={Tags}/>
            </View>
            <View style={Style.backIcon2}>
            <Image source={Tags2}/>
            </View>
        </View>
        <View style={Style.text}>
        <Text style={Style.ScreenText2}>Get the,</Text>
        <Text style={Style.ScreenText2}>Best Deals on all items</Text>
        </View>
        <View style={Style.loaderIcon}>
        <Image  style={Style.icon1} source={Img4}/>
        <Image style={Style.icon1} source={Img4}/>
        <Image style={Style.icon1} source={Img3}/>

        </View>
        <View style={Style.SkipView}> 
        <TouchableOpacity style={Style.skip} onPress={()=> {props.navigation.navigate('Login')}}>
        <Text style={Style.skip} >Proceed</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
}
export default Screen3