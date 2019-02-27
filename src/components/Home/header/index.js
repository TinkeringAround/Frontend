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
  const { activity, setActivity } = appContext
  const { setLoading } = props

  return (
    <Container
      height="60px"
      width="100%"
      position="fixed"
      top="0"
      zIndex="10"
      borderBottom={'5px solid ' + Theme.colors.darkBlue}
      overflowY="hidden"
      backgroundColor={Theme.colors.lightBlue}
    >
      <Flex height="60px" flexDirection="row" justifyContent="space-between" alignItems="center">
        {activity != null ? (
          <Button
            marginLeft="20px"
            width="40px"
            height="40px"
            backgroundColor="transparent"
            onClick={() => {
              setActivity(null)
            }}
          >
            <SVG
              width="40px"
              height="40px"
              fill={Theme.colors.white}
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
          backgroundColor={Theme.colors.white}
          color={Theme.textColors.darkGrey}
          fontSize={Theme.fontSizes.medium}
          marginRight="20px"
          marginBottom="12px"
          borderRadius={Theme.borderRadius.small}
          boxShadow={'0 5px 0 ' + Theme.colors.darkGrey}
          animated
          onClick={() => {
            setTimeout(() => {
              appContext.logout()
              setLoading(true)
            }, 250)
          }}
        >
          Abmelden
        </Button>
      </Flex>
    </Container>
  )
}
