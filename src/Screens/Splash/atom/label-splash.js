import React from 'react'
import Label from 'components/Label'
import Item from 'components/Item'
import { colors } from 'utils/colors'


const LabelSplash = ({navigation}) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);
    }, [])
    
    return (
        <Item justifycenter alignCenter>
            <Label color={colors.WHITE} size={42}>Movie lab</Label>
            <Label color={colors.WHITE}>Mobile Application</Label>
        </Item>
    )
}

export default LabelSplash