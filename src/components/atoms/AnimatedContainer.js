import React, { useEffect, useState } from 'react'
import posed from 'react-pose'

// Animations
const DURATION = 400
const DAMPING = 20
const LEFT_LEFT = '-100vw'
const LEFT_RIGHT = '100vw'

const Page = posed.div({
  left: {
    opacity: 0,
    left: LEFT_LEFT,
    transition: {
      left: {
        duration: DURATION,
        type: 'spring',
        damping: DAMPING
      }
    }
  },
  center: {
    opacity: 1,
    left: 0,
    delay: 400,
    transition: {
      left: {
        duration: DURATION,
        type: 'spring',
        damping: DAMPING
      }
    }
  },
  right: {
    opacity: 0,
    left: LEFT_RIGHT,
    transition: {
      left: {
        duration: 1
      }
    }
  }
})

export default props => {
  const { children, animate, styles, position } = props
  const [pose, setPose] = useState('right')

  useEffect(() => {
    if (animate) {
      setPose('right')
      setTimeout(() => {
        setPose('center')
      }, 100)
    } else {
      setPose('left')
    }
  }, [animate])

  return (
    <Page
      pose={pose}
      style={{
        position: position != null ? position : 'absolute',
        ...styles
      }}
    >
      {children}
    </Page>
  )
}
