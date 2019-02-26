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
      lineHeight="1.2"
      overflowWrap="break-word"
    >
      {stage.puzzle.task}
    </Text>
  )
}
