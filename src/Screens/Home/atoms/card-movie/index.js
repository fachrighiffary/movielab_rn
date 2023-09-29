import React from 'react'
import Label from 'components/Label';
import Item from 'components/Item';

import { colors } from 'utils/colors';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CardMovie = ({ item, navigation }) => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    navigation.navigate('Detail', item.id)
                 }}>
                <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.imageBackground}>
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.rightText}>{item.original_language}</Text>
                    </View>
                    <View style={styles.badge}>
                        <Label color={colors.WHITE} bold>{item.vote_average}</Label>
                    </View>

                </ImageBackground>
            </TouchableOpacity>
            <Item marginTop={18} paddingHorizontal={18}>
                <Label color={colors.WHITE} size={24}>{item.original_title}</Label>
                <Label color={colors.WHITE}>Release Date : {item.release_date}</Label>
            </Item>
        </>
    )
}

export default CardMovie

const styles = StyleSheet.create({
    item: {
        // borderRadius: 12,
        backgroundColor: 'white',
        flex: 0.6,
        borderRadius: 12,
        // borderColor: 'white',
        // elevation: 3,
        width: 300,
        alignSelf: 'center',
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 10,
        position: 'relative'
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: 12,
        backgroundColor: 'red',
        padding: 5,
        marginTop: 3,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightText: {
        color: 'white'
    },
    lowerContainer: {
        justifyContent: 'flex-end',
        margin: 10,
        backgroundColor: 'red'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    contentText: {
        marginTop: 10,
        fontSize: 12,
    },
    badge: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        borderRadius: 25,
        position: 'absolute',
        left: -20,
        bottom: -20,
        borderWidth: 8,
        borderColor: colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    }
})