import React from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Text from '../../atoms/Text'

//--------------------------------------------------------------------------//
export default props => {
  const { stage } = props

  return (
    <Text
      width="90%"
      height="auto"
      margin="auto"
      textAlign="center"
      fontFamily={Theme.fonts.mono}
      fontSize={Theme.fontSizes.xxxlarge}
      color={Theme.textColors.darkGrey}
      letterSpacing="5px"
      lineHeight={Theme.lineHeight}
      overflowWrap="break-word"
    >
      {stage.task}
    </Text>
  )
}
