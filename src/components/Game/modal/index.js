import React from 'react'
import { Portal } from 'react-portal'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Button from '../../atoms/Button'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

//--------------------------------------------------------------------------//
export default props => {
  const { helpText, setShowHelp } = props

  return (
    <Portal>
      <Box
        position="fixed"
        width="100vw"
        height="100vh"
        backgroundColor="rgba(0,0,0,0.75)"
        zIndex="100"
      >
        <Flex
          flexDirection="column"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="80%"
            height="auto"
            margin="0"
            backgroundColor={Theme.colors.white}
            borderRadius={Theme.borderRadius.small}
          >
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
              <Text
                width="80%"
                marginTop="20px"
                color={Theme.textColors.darkGrey}
                fontSize={Theme.fontSizes.xxlarge}
                textAlign="center"
              >
                Ein Tipp für dich:
              </Text>
              <Text
                width="80%"
                margin="20px auto 30px auto"
                color={Theme.textColors.darkGrey}
                fontSize={Theme.fontSizes.medium}
                textAlign="center"
              >
                {helpText}
              </Text>
              <Button
                width="80%"
                height="60px"
                color={Theme.textColors.white}
                backgroundColor={Theme.colors.lightBlue}
                marginBottom="30px"
                borderRadius={Theme.borderRadius.small}
                boxShadow={'0 5px 0 ' + Theme.colors.darkBlue}
                fontSize={Theme.fontSizes.xxlarge}
                onClick={() => setShowHelp(false)}
              >
                Zurück
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Portal>
  )
}
