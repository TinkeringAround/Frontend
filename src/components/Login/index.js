import React, { useState, useContext } from 'react'
import axios from 'axios'

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

// Components
import Logo from './Logo'

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

  const login = () => {
    axios
      .post('http://157.230.76.219:30000/api/v1/users/login', {
        email: email,
        password: password
      })
      .then(function(response) {
        console.log(response.data.data)
        appContext.login(response.data.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <React.Fragment>
      <Logo />

      <Container position="absolute" width="100%" height="45%" bottom="0px">
        <Flex justifyContent="flex-start" flexDirection="column">
          <Text
            fontSize={Theme.fontSizes.xlarge}
            margin="10px auto 8px auto"
            color={Theme.textColors.darkGrey}
          >
            Infos eingeben
          </Text>
          <Box
            width="85%"
            height="110px"
            border={'5px solid ' + Theme.colors.lightGrey}
            borderRadius="12px"
            margin="0 auto 40px auto"
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

              <Box width="100%" height="5px" backgroundColor={Theme.colors.lightGrey} margin="0" />

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
            width="85%"
            height="60px"
            color={Theme.textColors.white}
            backgroundColor={Theme.colors.lightBlue}
            margin="0 auto"
            borderRadius="12px"
            boxShadow={'0 5px 0 ' + Theme.colors.darkBlue}
            fontSize={Theme.fontSizes.xxlarge}
            onClick={login}
          >
            Anmelden
          </Button>
        </Flex>
      </Container>
    </React.Fragment>
  )
}
