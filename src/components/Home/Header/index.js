import React, { useContext } from 'react'

// Context
import AppContext from '../../../context/app-context'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

// Images
import CharacterHead from '../../../assets/images/'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)

  return (
    <Container height="100px" width="100%" position="fixed" top="0" zIndex="999">
      <Flex height="50px" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Button
          width="105px"
          height="30px"
          backgroundColor={Theme.colors.lightBlue}
          color={Theme.textColors.white}
          fontSize={Theme.fontSizes.medium}
          borderRadius="12px"
          marginRight="20px"
          boxShadow={'0 5px 0 ' + Theme.colors.darkBlue}
          onClick={() => appContext.logout()}
        >
          Abmelden
        </Button>
      </Flex>
      <Flex height="50px" flexDirection="row" justifyContent="center" alignItems="center">
        <Text
          margin="auto auto"
          color={Theme.textColors.lightGrey}
          fontSize={Theme.fontSizes.normal}
        >
          Es gibt heute wieder neue Rätsel für dich!
        </Text>
      </Flex>
    </Container>
  )
}

/*
        <Text marginLeft="20px" color={Theme.textColors.darkGrey} fontSize={Theme.fontSizes.large}>
          Hallo Alina!
        </Text>
        */
