import React from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Container from '../../atoms/Container'
import SVG from '../../atoms/Svg'

// Icons
import Icons from '../../../assets/icons'

//--------------------------------------------------------------------------//
export default () => {
  return (
    <Container position="absolute" width="100%" height="55%" top="0px" overflowX="hidden">
      <SVG
        position="absolute"
        top="-200px"
        left="-105px"
        width="415px"
        height="369px"
        fill={Theme.colors.lightBlue}
        viewBox={Icons.getSVG('puzzle').viewBox}
      >
        {Icons.getSVG('puzzle').path}
      </SVG>
      <SVG
        position="absolute"
        top="-69px"
        left="155px"
        width="420px"
        height="370px"
        fill={Theme.colors.darkBlue}
        viewBox={Icons.getSVG('puzzle').viewBox}
        style={{ transform: 'rotate(90deg)' }}
      >
        {Icons.getSVG('puzzle').path}
      </SVG>
    </Container>
  )
}
