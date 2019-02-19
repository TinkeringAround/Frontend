import React, { useState, useContext } from 'react'

// Context
import AppContext from '../../context/app-context'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'
import Text from '../atoms/Text'
import Box from '../atoms/Box'
import Button from '../atoms/Button'
import Textfield from '../atoms/Textfield'
import Image from '../atoms/Image'

// Image
import elefant from '../../assets/images/Character.png'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const updateEmail = event => {
    setEmail(event.target.value)
  }

  const updatePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <React.Fragment>
      <Container width="100vw" height="100%" backgroundColor={Theme.colors.white}>
        <Container width="100%" height="55%" position="absolute" left="0" top="0">
          <Flex flexDirection="column">
            <Text
              fontSize={Theme.fontSizes.xlarge}
              margin="0 auto 20px auto"
              color={Theme.textColors.darkGrey}
            >
              Willkommen bei <strong>Pampi's Puzzle!</strong>
            </Text>
            <Image src={elefant} width="70%" height="70%" />
          </Flex>
        </Container>

        <Container width="100%" height="45%" position="absolute" left="0" bottom="0">
          <Flex justifyContent="flex-start" flexDirection="column">
            <Text
              fontSize={Theme.fontSizes.xlarge}
              margin="10px auto 8px auto"
              color={Theme.textColors.darkGrey}
            >
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
                <Textfield
                  name="email"
                  type="email"
                  color={Theme.textColors.darkGrey}
                  fontSize={Theme.fontSizes.large}
                  textAlign="start"
                  width="80%"
                  margin="auto"
                  placeholder="Benutzername"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  onChange={updateEmail}
                />

                <Box
                  width="100%"
                  height="5px"
                  backgroundColor={Theme.colors.lightGrey}
                  margin="0"
                />

                <Textfield
                  name="password"
                  type="password"
                  color={Theme.textColors.darkGrey}
                  fontSize={Theme.fontSizes.large}
                  textAlign="start"
                  width="80%"
                  margin="auto"
                  placeholder="Password"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  onChange={updatePassword}
                />
              </Flex>
            </Box>

            <Button
              width="80%"
              height="45px"
              color={Theme.textColors.white}
              backgroundColor={Theme.colors.lightBlue}
              margin="0 auto"
              borderRadius="12px"
              boxShadow={'0 5px 0 ' + Theme.colors.darkBlue}
              fontSize={Theme.fontSizes.xxlarge}
              onClick={() => appContext.login(email, password)}
            >
              Anmelden
            </Button>
          </Flex>
        </Container>
      </Container>
    </React.Fragment>
  )
}
