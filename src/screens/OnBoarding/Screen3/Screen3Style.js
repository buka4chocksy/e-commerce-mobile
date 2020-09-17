import { StyleSheet } from 'react-native';
import Colors from '../../../Theme/Colors';

export default StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    logoView:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:60
    },
    logo2Style:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:-20
       
        
    },
    text:{
        justifyContent:"center",
        alignItems:"center",
       
    },
    ScreenText2:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:27.5
        
    },
    loaderIcon:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:"20%"
    },
    icon1:{
        marginRight:10
    },
    skip:{
        backgroundColor:Colors.background,
        justifyContent:"center",
        paddingTop:20,
        alignItems:"center",
        height:"100%",
        fontSize:27,
        fontWeight:"900",
        fontStyle:"normal",
        lineHeight:30,
        color:Colors.textColor,

    },
    SkipView:{
        
        marginTop:"12%"
    },
    pricetag:{
        backgroundColor:Colors.background,
        position:"absolute",
        top:"72%",
        right:"25%",
        justifyContent:"center",
        alignItems:"center",
        height:36,
        flexDirection:"row",
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        width:80,
        zIndex:100
    },
    tagPrice:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:20
    },
    tagPrice2:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:30,
        marginTop:-11,
        marginRight:5,
        marginLeft:2
    },
    backIcon:{
        position:"absolute",
        zIndex:-100,
        top:'55%',
        left:"15%"
    },
    backIcon2:{
        position:"absolute",
        zIndex:-100,
        top:'-7%',
        left:"43.5%"
    }
})