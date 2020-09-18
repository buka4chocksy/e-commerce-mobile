import React from 'react'
import Tab from '../../assets/images/tab.png';
import smallLogo from '../../assets/images/smallTsoft.png';
import cart from '../../assets/images/cart.png';
import smallPhone from '../../assets/images/smallphone.png';
import speaker from '../../assets/images/speaker.png';
import logo from '../../assets/images/TSoftsmall.png';
import vector from '../../assets/images/Mask.png';
import M from '../../assets/images/M.png';
import smallShirt from '../../assets/images/tshirt2.png';
import S from '../../assets/images/S.png';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Style from './DashboardStyle'
const Dashboard = () => {
    const lists = ["Electronics", 'Clothing', "Medicine", "Drugs", "Shoes"]
    return (
        <View style={Style.Container}>
               <View style={Style.topIcons}>
                <View>
                    <TouchableOpacity>
                        <Image source={Tab} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={smallLogo} />
                </View>
                <View>
                    <TouchableOpacity>
                        <Image source={cart} />

                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={Style.board}>
                <View>
                <Text style={Style.BoardHeaderText}>Male Purple Tank Top</Text>
                <Text style={Style.BoardHeaderText2}>Available in All Sizes</Text>
                </View>
                <View style={Style.SHirtWrapper}>
                <Image source={smallShirt}/>
                </View>
                <View style={Style.iconsWrapper}>
                <View style={Style.MStyle}>
                <Image source={M} />
                </View>
                <View style={Style.MStyle2}>
                 <Text style={Style.dbtext}>L</Text>
                </View>
                <View style={Style.MStyle}>
                <Image source={S} />
                </View>
                </View>
              <View style={Style.buttonWrapper}>
              <TouchableOpacity style={Style.boardText}>
                <Text style={Style.boardstexts}>Go to Listing</Text>
              </TouchableOpacity>
              </View>
            <View style={Style.dahsbordvector}>
            <Image source={vector}/>
            </View>
            </View>  
            <View style={Style.board}>
                <View>
                <Text style={Style.BoardHeaderText}>Female tea Shirt Tank Top</Text>
                <Text style={Style.BoardHeaderText2}>Available in All Sizes</Text>
                </View>
                <View style={Style.SHirtWrapper}>
                <Image source={smallShirt}/>
                </View>
                <View style={Style.iconsWrapper}>
                <View style={Style.MStyle}>
                <Image source={M} />
                </View>
                <View style={Style.MStyle2}>
                 <Text style={Style.dbtext}>L</Text>
                </View>
                <View style={Style.MStyle}>
                <Image source={S} />
                </View>
                </View>
              <View style={Style.buttonWrapper}>
              <TouchableOpacity style={Style.boardText}>
                <Text style={Style.boardstexts}>Go to Listing</Text>
              </TouchableOpacity>
              </View>
            <View style={Style.dahsbordvector}>
            <Image source={vector}/>
            </View>
            </View> 
            </ScrollView>

            <View>
                <Text style={Style.title}>New & Featured</Text>
            </View>
            <View style={Style.scrollStyle}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        lists.map((a, index) => {
                            return (

                                <TouchableOpacity onPress={() => alert(index)} style={Style.catButton} key={index}>
                                    <Text style={Style.buttonText}>{a}</Text>
                                </TouchableOpacity>
                            )

                        })
                    }
                </ScrollView>
            </View>

            <View style={Style.CardWrapper}>
                <ScrollView >
                <TouchableOpacity style={Style.card}>
                    <View>
                    <Image source={smallPhone} />
                    <Image  style={Style.positionLogo} source={logo}/>
                    </View>
                    <View>
                        <Text style={Style.text}>Apple</Text>
                        <Text style={Style.text2}>IPhone 11</Text>
                        <Text style={Style.text3}>128GB, Space Gray </Text>
                    </View>
                    <View>
                        <Text style={Style.text4}>Ad</Text>
                    </View>
                    <View>
                        <Image style={Style.cardcart} source={cart} />
                        <View style={Style.pricetag}>
                            <Text style={Style.tagText}>.</Text>
                            <Text style={Style.tagText2}>$1k</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Style.card2}>
                    <View>
                    <Image source={speaker} />
                    </View>
                    <View>
                        <Text style={Style.text}>LG</Text>
                        <Text style={Style.text2}>SoundRoom E8</Text>
                        <Text style={Style.text3}>128GB, Space Gray </Text>
                    </View>
                    <View>
                        <Text style={Style.text4}>Ad</Text>
                    </View>
                    <View>
                        <Image style={Style.cardcart} source={cart} />
                        <View style={Style.pricetag}>
                            <Text style={Style.tagText}>.</Text>
                            <Text style={Style.tagText2}>$2k</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </ScrollView>
               
            </View>
            </ScrollView>
           

        </View>
    )
}

export default Dashboard