import React, { useEffect, useState } from 'react'
import Item from 'components/Item'
import Label from 'components/Label'
import Loading from 'components/Loading'
import CardCast from './atoms/card-cast'
import Pie from 'react-native-pie';


import { Image, ImageBackground, ScrollView, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'
import { colors } from 'utils/colors'
import { getData } from 'api/'
import { timeConvert } from 'utils/time'
import { IconStarInActive } from 'assets/'
import { IconLoveInActive } from 'assets/'
import { IconStarActive } from 'assets/'
import { IconLoveActive } from 'assets/'
const { height, width } = Dimensions.get('screen')

const DeatilMovies = ({ route, navigation }) => {
    const [detailData, setDetailData] = useState({})
    const [dataCast, setDataCast] = useState([])
    const [load, setLoad] = useState(true)
    const [rate, setRate] = useState(false)
    const [like, setLike] = useState(false)

    useEffect(() => {
        getDetail()
    }, [route.params])


    const getDetail = async () => {
        setLoad(true)
        try {
            const resDetail = await getData(`movie/${route.params}`);
            const resCast = await getData(`movie/${route.params}/credits`)
            setDetailData(resDetail.data)
            setDataCast(resCast.data.cast)
            setLoad(false)
            
        } catch (error) {
            console.log(error);
        }
    }
   


    return (

        <Item flex backgroundColor={colors.BLACK}>
            {load ? (
                <Loading />
            ) : (
                    <ScrollView>
                        <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${detailData.backdrop_path}` }} style={styles.backdrop} blurRadius={3}>
                            <Item paddingHorizontal={10}>
                                <Label size={28} color={colors.WHITE}>{detailData.original_title}</Label>
                                <Label size={14} color={colors.WHITE}>R {detailData.release_date} . { timeConvert(detailData.runtime)}</Label>
                            </Item>
                            <ScrollView style={styles.container}>
                                <Item width={width} alignCenter marginTop={12}>
                                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500${detailData.poster_path}` }} style={styles.imgPoster} />
                                </Item>
                                <Item marginTop={12} paddingHorizontal={5} paddingVertical={5} backgroundColor={'darkgrey'} borderRadius={10}>
                                    <Label size={18} color={colors.WHITE}>OVERVIEW : </Label>
                                    <Label color={colors.WHITE}>
                                        {detailData.overview}
                                    </Label>
                                </Item>
                                <Item marginTop={10}>
                                    <Label size={18} color={colors.WHITE}>Genres : </Label>
                                    <Item flexDirection={'row'} marginTop={10}>
                                        {detailData.genres && detailData.genres.map((item, index) => {
                                            return (
                                                <Item key={index} backgroundColor={colors.WHITE} paddingHorizontal={5} paddingVertical={5} marginRight={5} borderRadius={8} justifycenter alignCenter>
                                                    <Label size={14} color={colors.BLACK}>{item.name}</Label>
                                                </Item>
                                            )
                                        })}
                                    </Item>
                                </Item>
                                <Item marginTop={10} flexDirection={'row'} alignCenter>
                                    <Item height={80} width={80}>
                                        <View style={styles.pie}>
                                            <Pie
                                                radius={32}
                                                innerRadius={25}
                                                sections={[
                                                {
                                                    percentage: detailData?.vote_average?.toFixed(1)*10,
                                                    color:
                                                    detailData?.vote_average?.toFixed(1)*10 < 51
                                                        ? colors.RED
                                                        : detailData?.vote_average?.toFixed(1)*10 < 76
                                                        ? colors.YELLOW
                                                        : colors.GREEN,
                                                },
                                                ]}
                                                backgroundColor="#CFD8DC"
                                            />
                                            <View style={styles.viewText}>
                                                <Label color={colors.WHITE} bold>
                                                {detailData?.vote_average?.toFixed(1)*10}%
                                                </Label>
                                            </View>
                                        </View>
                                    </Item>
                                    <Item justifycenter alignCenter>
                                        <TouchableOpacity onPress={() => {
                                            setRate(!rate)
                                        }}>
                                        <Image source={rate ? IconStarActive : IconStarInActive} style={styles.iconStar} />
                                        </TouchableOpacity>
                                        <Label color={colors.WHITE}>Rate</Label>
                                    </Item>
                                    <Item justifycenter alignCenter>
                                        <TouchableOpacity onPress={() => {
                                            setLike(!like)
                                        }}>
                                        <Image source={ like ? IconLoveActive :  IconLoveInActive} style={styles.iconStar} />
                                            
                                        </TouchableOpacity>
                                        <Label color={colors.WHITE}>Like</Label>
                                    </Item>
                                </Item>
                            </ScrollView>
                        </ImageBackground>
                        <Item paddingHorizontal={10}>
                            <Item marginBottom={12}>
                                <Label color={colors.WHITE} size={28}>Actors</Label>
                            </Item>
                            <CardCast data={dataCast} navigation={navigation}  />
                        </Item>
                    </ScrollView>
            )}
        </Item>
    )
}

export default DeatilMovies

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    backdrop: {
        flex: 1,
        minHeight: height - 150
    },
    imgPoster: {
        height: 350,
        width: 243
    },
    pie: {
        alignItems: 'center',
        position: 'relative',
        marginRight: 0,
        marginTop: 12,
      },
      viewText: {
        position: 'absolute',
        height: '95%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStar: {
        height: 40,
        width: 40
    }
})