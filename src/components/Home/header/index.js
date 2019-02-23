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
import icons from '../../../assets/icons'

//--------------------------------------------------------------------------//
export default props => {
  const appContext = useContext(AppContext)
  const { showBack, toActivities } = props

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
        {showBack ? (
          <Button
            marginLeft="20px"
            width="40px"
            height="40px"
            onClick={() => {
              toActivities()
            }}
          >
            <SVG
              width="40px"
              height="40px"
              fill={Theme.colors.darkGrey}
              viewBox={icons.getSVG('back').viewBox}
            >
              {icons.getSVG('back').path}
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
          borderRadius={Theme.borderRadius}
          boxShadow={'0 5px 0 ' + Theme.colors.darkBlue}
          onClick={() => {
            toActivities()
            setTimeout(() => {
              appContext.logout()
            }, 250)
          }}
        >
          Abmelden
        </Button>
      </Flex>
    </Container>
  )
}
