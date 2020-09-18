import { StyleSheet , Dimensions} from 'react-native';
import Colors from '../../Theme/Colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop:"20%",
    
    },
    topIcons:{
        justifyContent:"space-between",
        paddingLeft:10,
        paddingRight:10,
        flexDirection:"row"
    },
    board:{
        height:218,
        backgroundColor:Colors.background,
        marginTop:"7%",
        width:width
    },
    title:{
        fontWeight:"900",
        color:Colors.textColor,
        fontSize:24,
        margin:10
    },
    catButton:{
        backgroundColor:Colors.white,
        borderColor:Colors.textColor,
        borderWidth:2,
        width:103.57,
        height:30.5,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginLeft:4,
        marginRight:4
    },
    buttonText:{
        color:Colors.textColor
    },
    scrollStyle:{
        paddingTop:13,
        paddingBottom:13,
        justifyContent:"space-around",

    },
    CardWrapper:{
        padding:10,
        shadowColor:"grey",
        borderColor:"grey",
        shadowOpacity: 0.4,
    },
    card:{
        width:"100%",
        backgroundColor:Colors.background,
        height:120,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20
    },
    card2:{
        width:"100%",
        backgroundColor:Colors.white,
        height:120,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20
    },
    cardcart:{
    position:"absolute",
    top:"-19%",
    left:"35%"
    },
    pricetag:{
        backgroundColor:Colors.textColor,
        height:35.21,
        width:63.94,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        marginTop:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"

    },
    tagText:{
        color:Colors.background,
        fontWeight:"900",
        fontSize:38,
        left:-3,
        top:-15
        
    },
    tagText2:{
        color:Colors.background,
        fontWeight:"900",
        fontSize:18,
       
    },
    text:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:12
    },
    text2:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:19.51
    },
    text3:{
        color:Colors.textColor,
        fontWeight:"500",
        fontSize:12
    },
    text4:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:19.51,
        marginLeft:20,
        marginTop:-39
    },
    positionLogo:{
        position:"absolute",
        top:"50%",
        left:"42%"
    },
    dahsbordvector:{
        top:-49,
    },
    boardText:{
        backgroundColor:Colors.textColor,
        position:"absolute",
        width:"50%",
        height:29,
        justifyContent:"center",
        alignItems:"center" ,
        borderRadius:5   
    },
    buttonWrapper:{
        justifyContent:"center",
        alignItems:"center",
        top:'60%',

    },
    boardstexts:{
        color:Colors.white,
        fontSize:14,
        fontWeight:"900"
    },
    BoardHeaderText:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:18.30,
        top:54.85,
        left:54.18
    }
    ,
    BoardHeaderText2:{
        color:Colors.textColor,
        fontWeight:"900",
        fontSize:11.12,
        top:66.73,
        left:127.38
    },
    iconsWrapper:{
        flexDirection:"row",
        left:"78%",
        top:"17%"
    },
    MStyle:{
        marginRight:9,
        backgroundColor:Colors.white,
        padding:4,
        borderWidth:1,
        borderColor:Colors.textColor,
        justifyContent:"center",
        alignItems:"center"
    },
    MStyle2:{
        marginRight:9,
        backgroundColor:Colors.textColor,
        borderColor:Colors.white,
        padding:4,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    },
    dbtext:{
        fontSize:15.53,
        fontWeight:"900",
        color:Colors.white,
    },
    SHirtWrapper:{
        position:"absolute",
        left:"70%",
        top:30
    }

}
)