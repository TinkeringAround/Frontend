import React, { useState, useEffect } from 'react'
import posed from 'react-pose'

// Theme
import Theme from '../../theme'

// Atoms
import Box from '../atoms/Box'
import Text from '../atoms/Text'
import Flex from '../atoms/Flex'

// Animation
const Progressbar = posed.div({
  hidden: {
    width: 0
  },
  rest: {
    width: ({ percentage }) => percentage,
    transition: {
      width: {
        duration: 500
      }
    }
  },
  update: {
    width: ({ percentage }) => percentage,
    transition: {
      width: {
        duration: 500
      }
    }
  }
})

//--------------------------------------------------------------------------//
export default props => {
  const { percentage, styles, fullWidth, showText } = props
  const [pose, setPose] = useState('hidden')

  const defaultStyles = {
    height: styles != null && styles.height != null ? styles.height : '50px',
    width: styles != null && styles.width != null ? styles.width : '100%',

    borderRadius:
      styles != null && styles.borderRadius != null
        ? styles.borderRadius
        : Theme.borderRadius.small,

    color: styles != null && styles.color != null ? styles.color : Theme.colors.darkGreen,
    backgroundColor:
      styles != null && styles.backgroundColor != null
        ? styles.backgroundColor
        : Theme.colors.white,

    textColor:
      styles != null && styles.textColor != null ? styles.textColor : Theme.textColors.darkGrey,
    fontSize: styles != null && styles.fontSize != null ? styles.fontSize : Theme.fontSizes.medium
  }

  setTimeout(() => {
    setPose('rest')
  }, 250)

  useEffect(() => {
    setPose('update')
    setTimeout(() => {
      setPose('rest')
    }, 550)
  }, [percentage])

  return (
    <Flex
      height={defaultStyles.height + (showText != null && showText ? 20 : 0)}
      width={defaultStyles.width}
      flexDirection="column"
      justifyContent="center"
      margin="0"
    >
      {showText != null && showText ? (
        <Text
          fontSize={defaultStyles.fontSize}
          color={defaultStyles.textColor}
          textAlign="center"
          marginBottom="5px"
        >
          {percentage + '% gelöst'}
        </Text>
      ) : (
        ''
      )}
      <Box
        width={fullWidth != null && fullWidth ? defaultStyles.width : '80%'}
        height={defaultStyles.height}
        borderRadius={defaultStyles.borderRadius}
        backgroundColor={defaultStyles.backgroundColor}
      >
        <Progressbar
          pose={pose}
          percentage={percentage + '%'}
          style={{
            height: defaultStyles.height,
            borderRadius: defaultStyles.borderRadius,
            backgroundColor: defaultStyles.color
          }}
        />
      </Box>
    </Flex>
  )
}
