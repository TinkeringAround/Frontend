import React, { useState, useContext } from 'react'

// Context
import AppContext from '../../context/app-context'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Text from '../atoms/Text'
import Container from '../atoms/Container'
import Progressbar from '../Progressbar'
import Button from '../atoms/Button'
import SVG from '../atoms/Svg'
import icons from '../../assets/icons'
import Box from '../atoms/Box'

//--------------------------------------------------------------------------//
export default props => {
  const appContext = useContext(AppContext)
  const { stage } = props
  const [percentage, setPercentage] = useState(10)

  return (
    <React.Fragment>
      {stage != null ? (
        <React.Fragment>
          <Container height="60px" width="100%" position="absolute" top="0px" left="0px">
            <Flex width="100%" height="100%" justifyContent="flex-start" alignItems="center">
              <Progressbar
                backgroundColor={Theme.colors.lightGrey}
                color={Theme.colors.darkGreen}
                percentage={percentage}
              />
              <Button
                marginRight="20px"
                width="40px"
                height="40px"
                onClick={() => {
                  appContext.setStage(null)
                }}
              >
                <SVG
                  width="40px"
                  height="40px"
                  fill={Theme.colors.darkGrey}
                  viewBox={icons.getSVG('close').viewBox}
                >
                  {icons.getSVG('close').path}
                </SVG>
              </Button>
            </Flex>
          </Container>
          <Container height="auto" width="100%" position="absolute" top="60px" left="0px">
            <Flex
              marginTop="20px"
              width="100%"
              height="100%"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box
                width="90%"
                height="80%"
                backgroundColor={Theme.colors.lightGrey}
                borderRadius="12px"
              >
                <Flex
                  width="100%"
                  height="100%"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Text
                    fontSize={Theme.fontSizes.xxxlarge}
                    color={Theme.textColors.darkGrey}
                    textAlign="center"
                  >
                    {stage.title}
                  </Text>
                  {stage.clue !== '' ? (
                    <Text
                      margin="10px 5px 0 5px"
                      fontSize={Theme.fontSizes.normal}
                      color={Theme.textColors.darkGrey}
                      textAlign="center"
                    >
                      {stage.clue}
                    </Text>
                  ) : (
                    ''
                  )}
                </Flex>
              </Box>
            </Flex>
          </Container>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  )
}
