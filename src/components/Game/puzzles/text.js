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
      margin="75px auto"
      textAlign="center"
      fontSize={Theme.fontSizes.xxxxlarge}
      color={Theme.textColors.darkGrey}
    >
      {stage.task}
    </Text>
  )
}
