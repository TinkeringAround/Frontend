import React from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Text from '../../atoms/Text'
import Flex from '../../atoms/Flex'

//--------------------------------------------------------------------------//
export default props => {
  const { stage } = props

  return (
    <Flex
      width="90%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        margin="75px auto"
        textAlign="center"
        fontSize={Theme.fontSizes.xxxxlarge}
        color={Theme.textColors.darkGrey}
      >
        {stage.task}
      </Text>
    </Flex>
  )
}
