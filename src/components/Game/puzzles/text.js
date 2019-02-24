import React from 'react'
import Text from '../../atoms/Text'
import Theme from '../../../theme'

// Atoms

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
      {stage.puzzle.task}
    </Text>
  )
}
