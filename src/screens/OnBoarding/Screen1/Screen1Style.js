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
        marginTop: 90
    },
    logo2Style: {
        marginTop: 120
    },
    text: {
        paddingLeft: 15,
        paddingTop: 15
    },
    ScreenText2: {
        color: Colors.textColor,
        fontWeight: "900",
        fontSize: 27.5

    },
    loaderIcon: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "20%"
    },
    icon1: {
        marginRight: 10
    },
    skip: {
        color: Colors.background,
        fontSize: 24,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 30
    },
    SkipView: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 25,
        marginTop: "19%"
    }
})