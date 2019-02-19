import React from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import SVG from '../../atoms/Svg'

// Icons
import icons from '../../../assets/icons'

//--------------------------------------------------------------------------//
export default () => {
  return (
    <React.Fragment>
      <Container height="150px" backgroundColor={Theme.colors.white}>
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Text
            color={Theme.textColors.lightGrey}
            fontSize={Theme.fontSizes.normal}
            margin="0 auto"
          >
            1. Dezember
          </Text>

          <Button
            width="100%"
            height="100px"
            margin="5px auto 10px auto"
            backgroundColor={Theme.colors.disabled}
            borderRadius="12px"
            boxShadow={'0 5px 0 ' + Theme.colors.lightGrey}
          >
            <Flex justifyContent="space-around" alignItems="center">
              <SVG
                width="80px"
                height="80px"
                margin="auto 20px"
                fill={Theme.textColors.lightGrey}
                viewBox={icons.ViewBoxes.Picture}
              >
                {icons.Paths.Picture}
              </SVG>
              <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text
                  width="90%"
                  margin="auto auto 0 0"
                  fontSize={Theme.fontSizes.xxxlarge}
                  color={Theme.textColors.lightGrey}
                >
                  Wo ist das?
                </Text>
                <Text
                  width="90%"
                  margin="0 auto auto 0"
                  fontSize={Theme.fontSizes.default}
                  color={Theme.textColors.lightGrey}
                >
                  Zum Einstieg ein relativ leichtes Rätsel für dich.
                </Text>
              </Flex>
            </Flex>
          </Button>
        </Flex>
      </Container>
    </React.Fragment>
  )
}
