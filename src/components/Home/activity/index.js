import React from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

//--------------------------------------------------------------------------//
export default props => {
  const { achievements, game, meta } = props.activity

  return (
    <Container
      height="180px"
      backgroundColor={Theme.colors.white}
      marginTop="20px"
      marginBottom="10px"
      position="relative"
    >
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
        <Button
          width="100%"
          height="170px"
          margin="5px auto 10px auto"
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
              marginTop="10px"
              marginBottom="10px"
              textAlign="center"
              fontSize={Theme.fontSizes.xxxlarge}
              color={meta.completed ? Theme.textColors.lightGrey : Theme.textColors.white}
            >
              {game.title}
            </Text>
            <Text
              width="90%"
              textAlign="center"
              margin="0 auto"
              fontSize={Theme.fontSizes.normal}
              color={meta.completed ? Theme.textColors.lightGrey : Theme.textColors.white}
            >
              {game.description}
            </Text>
          </Flex>
        </Button>
      </Flex>
    </Container>
  )
}
