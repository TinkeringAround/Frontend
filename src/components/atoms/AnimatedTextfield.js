import React, { useEffect, useState } from 'react'
import posed from 'react-pose'

// Atoms
import Textfield from './Textfield'

// Animations
const AMPLITUDE = 15
const DURATION = 10
const DAMPING = 15

const AnimatedTextfield = posed(Textfield)({
  left: {
    left: -AMPLITUDE,
    duration: DURATION,
    transition: {
      type: 'spring',
      damping: DAMPING
    }
  },
  center: {
    left: 0,
    duration: DURATION,
    transition: {
      type: 'spring',
      damping: DAMPING
    }
  },
  right: {
    left: AMPLITUDE,
    duration: DURATION,
    transition: {
      type: 'spring',
      damping: DAMPING
    }
  }
})

export default props => {
  const { animate, styles, position } = props
  const [pose, setPose] = useState('center')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (animate) {
      setError(true)
      setPose('left')
      setTimeout(() => {
        setPose('right')
        setTimeout(() => {
          setPose('center')
        }, 250)
      }, 250)
    } else {
      setPose('center')
    }
  }, [animate])

  return (
    <AnimatedTextfield
      pose={pose}
      style={{
        position: position != null ? position : 'absolute',
        ...styles
      }}
      {...props}
      color={error ? 'red' : props.color}
      borderBottom={error ? '1px solid red' : props.borderBottom}
    />
  )
}
