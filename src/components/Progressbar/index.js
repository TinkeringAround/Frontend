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
  const { color, backgroundColor, percentage, showText } = props
  const [pose, setPose] = useState('hidden')

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
    <Flex height="50px" width="100%" flexDirection="column" justifyContent="center">
      {showText != null && showText ? (
        <Text
          fontSize={Theme.fontSizes.xlarge}
          color={Theme.textColors.darkGrey}
          textAlign="center"
        >
          {percentage + '% gelöst'}
        </Text>
      ) : (
        ''
      )}
      <Box width="80%" height="20px" borderRadius="12px" backgroundColor={backgroundColor}>
        <Progressbar
          pose={pose}
          percentage={percentage + '%'}
          style={{
            height: '20px',
            borderRadius: '12px',
            backgroundColor: color
          }}
        />
      </Box>
    </Flex>
  )
}
