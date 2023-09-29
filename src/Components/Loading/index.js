import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from 'components/Item'
import { colors } from 'utils/colors'
import Label from 'components/Label'

const Loading = () => {
    return (
        <Item flex backgroundColor={colors.BLACK} justifycenter alignCenter>
            <ActivityIndicator size={'large'} color={colors.WHITE} />
            <Item marginTop={12}>
                <Label color={colors.WHITE}>Please Wait ...</Label>
            </Item>
        </Item>
    )
}

export default Loading

const styles = StyleSheet.create({})