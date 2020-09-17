import { StyleSheet } from 'react-native';
import Colors from '../../../Theme/Colors';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#ffffff"

    },
    logoView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 90,
        alignContent:"space-between",
        flexDirection:"row"
    },
    tag3Style: {
       position:"absolute",
       zIndex:-100,
       top:'83%',
       left:"-2%"
    },
    tag4Style: {
        position:"absolute",
        zIndex:-150,
        top:'10%',
        right:'0.5%'
     },
    textInputWrapper:{
        padding:10,
        marginTop:30,
      
    },
    label:{
        fontSize:27,
        color:Colors.textColor,
        fontWeight:"900",
        fontStyle:"normal",
        marginBottom:25,
    },
    inputWrapper:{
    //    backgroundColor:Colors.white
    },
    labelText:{
        color:Colors.grey,
        fontSize:17,
       shadowOpacity:0,
       paddingTop:5,
       paddingBottom:5

    },
    loginButton:{
        backgroundColor:Colors.textColor,
        marginLeft:"5%",
        marginRight:"5%",
        height:'7%',
        marginTop:60,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center"
    },
    LoginText:{
        fontSize:18,
        color:Colors.white,
        fontWeight:"500"

    },
    googleSignupButton:{
        fontSize:19,
        color:Colors.textColor,
        fontWeight:"500"

    },
    forgotpwd:{
        fontSize:19,
        color:Colors.offGrey,
        fontWeight:"500"

    },
    signupButton:{
        marginLeft:"5%",
        marginRight:"5%",
        height:'20%',
        marginTop:25,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center"
    },
    signupButton2:{
        marginLeft:"5%",
        marginRight:"5%",
        height:'20%',
        marginTop:2,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center"
    },
    inputHolder:{
        flexDirection:"row",
        display:"flex",
        backgroundColor:Colors.white,
    },
    iconGood:{
        justifyContent:"center",
        alignItems:"center"
    },
    backView:{
        position:"absolute",
        justifyContent:"space-between",
        top:'10%',
        padding:13
    }
})