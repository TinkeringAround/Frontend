import React, { useContext } from 'react'

// Context
import AppContext from '../../context/app-context'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

// Components
import Puzzle from './Puzzle'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)

  return (
    <React.Fragment>
      <Container width="100vw" height="100vh" backgroundColor={Theme.colors.white}>
        <Container height="20%" position="absolute" left="0" top="0">
          <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
            <Flex flexDirection="row" justifyContent="flex-end" alignItems="center">
              <Button
                width="105px"
                height="30px"
                backgroundColor={Theme.colors.lightBlue}
                color={Theme.textColors.white}
                fontSize={Theme.fontSizes.medium}
                margin="0 20px 0 auto"
                borderRadius="12px"
                boxShadow={'0 5px 0 ' + Theme.colors.darkBlue}
                onClick={() => appContext.logout()}
              >
                Abmelden
              </Button>
            </Flex>
            <Flex flexDirection="column" alignItems="center" justifyContent="center">
              <Text
                color={Theme.textColors.darkGrey}
                fontSize={Theme.fontSizes.large}
                margin="0 auto 0 20px"
              >
                Hallo Alina!
              </Text>
              <Text
                fontSize={Theme.fontSizes.normal}
                color={Theme.textColors.lightGrey}
                margin="5px auto 0 20px"
              >
                Es gibt heute wieder ein neues Rätsel für dich!
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Container>
      <Container height="80%" position="absolute" left="0" bottom="0">
        <Flex width="90%" flexDirection="column" justifyContent="space-around" alignItems="center">
          <Puzzle />
          <Puzzle />
        </Flex>
      </Container>
    </React.Fragment>
  )
}
