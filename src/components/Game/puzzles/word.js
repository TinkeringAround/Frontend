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
    </Flex>
  )
}
