import React ,{useState}from 'react'
import { View, Text,Image ,TextInput,TouchableOpacity} from 'react-native'
import Img from '../../../assets/images/logo.png'
import Tags from '../../../assets/images/tag4.png'
import Tags2 from '../../../assets/images/tag3.png'
import Back from '../../../assets/images/back.png'

import Style from './LoginStyle'
const Login = (props) => {
    const [value, onChangeText] = useState('')
    return (
        <View style={Style.Container}>
            <View style={Style.logoView}>
            <Image source={Img} />
            </View>
            <View style={Style.backView}>
                <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
                <Image source={Back} />
                </TouchableOpacity>
            </View>
            <View style={Style.tag3Style}>
            <Image source={Tags2} />
            </View>
            <View style={Style.tag4Style}>
            <Image source={Tags} />
            </View>
            
            <View style={Style.textInputWrapper}> 
            <Text style={Style.label}>Sign In</Text>
            <View style={Style.inputWrapper}>
            <Text style={Style.labelText}>Email</Text>
            <TextInput
      style={{ height: 60,textAlign:"center",opacity:2.0, shadowColor: 'grey',shadowOpacity: 0.4, borderColor: '#f1f1f1', borderWidth: 0.3 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
            </View>
            <View style={Style.inputWrapper}>
            <Text style={Style.labelText}>Password</Text>
            <TextInput
      style={{ height: 60,textAlign:"center",opacity:2.0,shadowColor: 'grey',shadowOpacity: 0.4, borderColor: '#f1f1f1', borderWidth: 0.3 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
            </View>
            </View>
        <TouchableOpacity style={Style.loginButton} onPress={()=>{props.navigation.navigate('BottomTab')}}>
            <Text style={Style.LoginText}>Login</Text>
        </TouchableOpacity>
        <View>
        <TouchableOpacity style={Style.signupButton}>
            <Text style={Style.googleSignupButton}>Login up with google</Text>
        </TouchableOpacity>    
        <TouchableOpacity style={Style.signupButton2}>
            <Text style={Style.forgotpwd}>Forgot your password ? click here</Text>
        </TouchableOpacity>    
           
         </View>
        </View>
    )
}
export default Login
