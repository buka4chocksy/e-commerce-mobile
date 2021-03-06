import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Img from '../../../assets/images/logo.png'
import Tags from '../../../assets/images/tag5.png'
import Tags2 from '../../../assets/images/tags6.png'
import good from '../../../assets/images/good.png'
import Back from '../../../assets/images/back.png'
import Style from './RegisterStyle'
const Register = (props) => {
    const [value, onChangeText] = useState('')
    return (
        <View style={Style.Container}>
            <View style={Style.logoView}>
                <Image source={Img} />
            </View>
            <View style={Style.backView}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image source={Back} />
                </TouchableOpacity>
            </View>
            <View style={Style.tag3Style}>
                <Image source={Tags} />
            </View>
            <View style={Style.tag4Style}>
                <Image source={Tags2} />
            </View>

            <View style={Style.textInputWrapper}>
                <Text style={Style.label}>Sign Up</Text>
                <View style={Style.inputWrapper}>
                    <Text style={Style.labelText}>Name</Text>
                    <View style={Style.inputHolder}>
                        <TextInput
                            style={{ height: 60, textAlign: "center", opacity: 2.0, width: "90%", shadowColor: 'grey', backgroundColor: '#ffffff', borderColor: '#f1f1f1', borderLeftWidth: 0.3, borderBottomWidth: 0.3, borderTopWidth: 0.3 }}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                        <View style={Style.iconGood}>
                            {
                                !value ? null : <Image source={good} />

                            }
                        </View>

                    </View>

                </View>
                <View style={Style.inputWrapper}>
                    <Text style={Style.labelText}>Email</Text>
                    <View style={Style.inputHolder}>
                        <TextInput
                            style={{ height: 60, textAlign: "center", opacity: 2.0, width: "90%", shadowColor: 'grey', backgroundColor: '#ffffff', borderColor: '#f1f1f1', borderLeftWidth: 0.3, borderBottomWidth: 0.3, borderTopWidth: 0.3 }}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                        <View style={Style.iconGood}>
                            {
                                !value ? null : <Image source={good} />

                            }
                        </View>

                    </View>

                </View>
                <View style={Style.inputWrapper}>
                    <Text style={Style.labelText}>Password</Text>
                    <View style={Style.inputHolder}>
                        <TextInput
                            style={{ height: 60, textAlign: "center", opacity: 2.0, width: "90%", shadowColor: 'grey', backgroundColor: '#ffffff', borderColor: '#f1f1f1', borderLeftWidth: 0.3, borderBottomWidth: 0.3, borderTopWidth: 0.3 }}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                        <View style={Style.iconGood}>
                            {
                                !value ? null : <Image source={good} />

                            }
                        </View>

                    </View>

                </View>
            </View>
            <TouchableOpacity style={Style.loginButton}>
                <Text style={Style.LoginText}>Sign Up</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={Style.signupButton}>
                    <Text style={Style.googleSignupButton}>Sign up with google</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}
export default Register
