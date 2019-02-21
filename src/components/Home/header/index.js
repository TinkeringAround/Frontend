import React, { useContext } from 'react'

// Context
import AppContext from '../../../context/app-context'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Container from '../../atoms/Container'
import Button from '../../atoms/Button'
import SVG from '../../atoms/Svg'

// Icons
import Icons from '../../../assets/icons'

//--------------------------------------------------------------------------//
export default props => {
  const appContext = useContext(AppContext)
  const { enableBack, back } = props

  return (
    <Container
      height="60px"
      width="100%"
      position="fixed"
      top="0"
      zIndex="10"
      borderBottom={'5px solid ' + Theme.colors.lightGrey}
      overflowY="hidden"
    >
      <Flex height="60px" flexDirection="row" justifyContent="space-between" alignItems="center">
        {enableBack ? (
          <Button
            width="40px"
            height="40px"
            backgroundColor={Theme.colors.white}
            onClick={() => back()}
            marginLeft="20px"
          >
            <SVG
              width="40px"
              height="40px"
              margin="auto 0"
              fill={Theme.textColors.lightGrey}
              viewBox={Icons.getSVG('zurueck').viewBox}
            >
              {Icons.getSVG('zurueck').path}
            </SVG>
          </Button>
        ) : (
          <React.Fragment />
        )}
        <Button
          width="140px"
          height="40px"
          backgroundColor={Theme.colors.lightBlue}
          color={Theme.textColors.white}
          fontSize={Theme.fontSizes.medium}
          marginRight="20px"
          marginBottom="12px"
          borderRadius="12px"
          boxShadow={'0 5px 0 ' + Theme.colors.darkBlue}
          onClick={() => {
            back()
            appContext.logout()
          }}
        >
          Abmelden
        </Button>
      </Flex>
    </Container>
  )
}
