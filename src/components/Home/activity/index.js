import React from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

//--------------------------------------------------------------------------//
export default props => {
  const { achievements, game, meta } = props.activity

  return (
    <Button
      width="100%"
      height="120px"
      margin="20px auto"
      backgroundColor={meta.completed ? Theme.colors.disabled : Theme.colors.lightBlue}
      borderRadius="12px"
      boxShadow={`0 5px 0 ${meta.completed ? Theme.colors.lightGrey : Theme.colors.darkBlue}`}
      onClick={() => {
        props.onClick(game, achievements)
      }}
    >
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" width="90%">
        <Text
          width="90%"
          margin="10px auto 5px 0"
          textAlign="start"
          fontSize={Theme.fontSizes.xxxlarge}
          color={meta.completed ? Theme.textColors.lightGrey : Theme.textColors.white}
        >
          {game.title}
        </Text>
        <Text
          width="90%"
          textAlign="start"
          margin="0 auto 0 0"
          fontSize={Theme.fontSizes.medium}
          color={meta.completed ? Theme.textColors.lightGrey : Theme.textColors.white}
        >
          {game.description}
        </Text>
      </Flex>
    </Button>
  )
}
