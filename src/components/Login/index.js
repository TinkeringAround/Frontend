import React from 'react'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'
import Text from '../atoms/Text'
import Box from '../atoms/Box'
import Button from '../atoms/Button'

//--------------------------------------------------------------------------//
export default props => {
  return (
    <React.Fragment>
      <Container width="100vw" height="100vh">
        <Container width="100%" height="55%" position="absolute" left="0" top="0">
          <Text>Willkommen bei</Text>
        </Container>

        <Container width="100%" height="45%" position="absolute" left="0" bottom="0">
          <Flex justifyContent="flex-start" flexDirection="column">
            <Text fontSize={Theme.fontSizes.xlarge} margin="0 auto 8px auto">
              Infos eingeben
            </Text>
            <Box
              width="80%"
              height="110px"
              border={'5px solid ' + Theme.colors.lightGrey}
              borderRadius="12px"
              margin="0 auto 60px "
            >
              <Flex flexDirection="column" justifyContent="space-evenly" alignItems="strech">
                <Text
                  color={Theme.textColors.lightGrey}
                  fontSize={Theme.fontSizes.large}
                  margin="auto 0 auto 30px"
                >
                  Benutzername
                </Text>

                <Box
                  width="100%"
                  height="5px"
                  backgroundColor={Theme.colors.lightGrey}
                  margin="0"
                />

                <Text
                  color={Theme.textColors.lightGrey}
                  fontSize={Theme.fontSizes.large}
                  margin="auto 0 auto 30px"
                >
                  Password
                </Text>
              </Flex>
            </Box>
            <Button
              width="80%"
              height="45px"
              color={Theme.textColors.darkGrey}
              margin="0 auto"
              borderRadius="12px"
              boxShadow={'0 5px 0 ' + Theme.colors.darkGrey}
              fontSize={Theme.fontSizes.xxlarge}
              onClick={() => {}}
            >
              Anmelden
            </Button>
          </Flex>
        </Container>
      </Container>
    </React.Fragment>
  )
}
