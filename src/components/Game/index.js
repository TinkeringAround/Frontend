import React, { useState, useContext } from 'react'

// Context
import AppContext from '../../context/app-context'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'
import Progressbar from '../Progressbar'
import Button from '../atoms/Button'
import SVG from '../atoms/Svg'
import icons from '../../assets/icons'
import Box from '../atoms/Box'

// Components
import TextPuzzle from './puzzles/text'
import Textfield from '../atoms/Textfield'

//--------------------------------------------------------------------------//
export default props => {
  const appContext = useContext(AppContext)
  const { stage } = props
  const [percentage, setPercentage] = useState(10)
  const [solution, setSolution] = useState('')

  let component = ''
  if (stage != null) {
    switch (stage.type) {
      case 'text': {
        component = <TextPuzzle stage={stage} />
        break
      }
      default: {
        component = ''
      }
    }
  }

  return (
    <React.Fragment>
      {stage != null ? (
        <React.Fragment>
          <Container height="10%" width="100%" position="absolute" top="0px" left="0px">
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
          <Container height="65%" width="100%" position="absolute" top="10%" left="0px">
            <Flex
              width="100%"
              height="100%"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box width="90%" height="100%">
                <Flex
                  width="100%"
                  height="100%"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  {component}
                </Flex>
              </Box>
            </Flex>
          </Container>
          <Container position="absolute" bottom="0px" left="0px" height="25%" width="100%">
            <Flex flexDirection="column" justifyContent="flex-end" alignItems="center">
              <Textfield
                name="solution"
                type="text"
                value={solution}
                color={Theme.textColors.darkGrey}
                fontSize={Theme.fontSizes.xxlarge}
                textAlign="left"
                width="80%"
                margin="0 auto"
                placeholder="Lösung"
                borderBottom={'1px solid ' + Theme.colors.darkGrey}
                onChange={event => {
                  setSolution(event.target.value)
                }}
              />
              <Button
                width="85%"
                height="60px"
                color={Theme.textColors.white}
                backgroundColor={Theme.colors.lightGreen}
                margin="30px auto"
                borderRadius={Theme.borderRadius}
                boxShadow={'0 5px 0 ' + Theme.colors.darkGreen}
                fontSize={Theme.fontSizes.xxlarge}
                onClick={() => {
                  console.log('Weiter')
                  console.log(solution === stage.puzzle.solution)
                  if (solution === stage.puzzle.solution && percentage !== 100) setPercentage(100)
                }}
              >
                Überprüfen
              </Button>
            </Flex>
          </Container>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  )
}
