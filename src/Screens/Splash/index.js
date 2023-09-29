import React from 'react'
import Item from 'components/Item'
import LabelSplash from 'splash/atom/label-splash'
import { colors } from 'utils/colors'

const Splash = ({navigation}) => {
  return (
    <Item flex justifycenter alignCenter backgroundColor={colors.BLACK}>
       <LabelSplash navigation={navigation} />
    </Item>
  )
}

export default Splash