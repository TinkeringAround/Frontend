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
import AnimatedTextfield from '../atoms/AnimatedTextfield'
import Box from '../atoms/Box'
import Text from '../atoms/Text'

// Components
import TextPuzzle from './puzzles/text'
import MatrixPuzzle from './puzzles/matrix'
import WordPuzzle from './puzzles/word'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)
  const { stage, setStage, setActivity } = appContext
  const [percentage, setPercentage] = useState(10)
  const [solution, setSolution] = useState('')
  const [error, setError] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [textSolution, setTextSolution] = useState(true)

  const saveAndExit = () => {
    // if solution is correct => showHint === true
    if (showHint) {
      // save
    }
    // then exit
    setTextSolution(true)
    setSolution('')
    setPercentage(10)
    setShowHint(false)
    setStage(null)
    setActivity(null)
  }

  if (stage != null && stage.solved) {
    setTimeout(() => {
      gameIsSolved()
    }, 1250)
  }

  const gameIsSolved = () => {
    setTextSolution(true)
    setSolution(stage.stage.puzzle.solution)
    setPercentage(100)
    setShowHint(true)
  }

  let component = ''
  if (stage != null) {
    switch (stage.stage.type) {
      case 'text': {
        component = <TextPuzzle stage={stage.stage} />
        break
      }
      case 'matrix': {
        component = (
          <MatrixPuzzle stage={stage.stage} solved={stage.solved} gameIsSolved={gameIsSolved} />
        )
        if (textSolution) setTextSolution(false)
        break
      }
      case 'word': {
        component = <WordPuzzle stage={stage.stage} />
        break
      }
      default: {
        component = 'Test'
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
                styles={{
                  height: '20px',
                  color: Theme.colors.darkGreen,
                  backgroundColor: Theme.colors.lightGrey,
                  borderRadius: '12px'
                }}
                percentage={percentage}
              />
              <Button marginRight="20px" width="40px" height="40px" onClick={saveAndExit}>
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
              width="90%"
              height="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {component}
            </Flex>
          </Container>
          <Container position="absolute" bottom="0px" left="0px" height="25%" width="100%">
            <Flex
              flexDirection="column"
              justifyContent="flex-end"
              alignItems="center"
              position="relative"
            >
              {textSolution && !showHint ? (
                <React.Fragment>
                  <AnimatedTextfield
                    animate={error}
                    name="solution"
                    type="text"
                    value={solution}
                    color={Theme.textColors.darkGrey}
                    fontSize={Theme.fontSizes.xxlarge}
                    textAlign="left"
                    width="80%"
                    height="30px"
                    margin="1px auto"
                    placeholder="Lösung"
                    borderBottom={'1px solid ' + Theme.colors.darkGrey}
                    onChange={event => {
                      setSolution(event.target.value)
                    }}
                    style={{
                      position: 'relative'
                    }}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment />
              )}
              {showHint || textSolution ? (
                <Button
                  animated
                  width="85%"
                  height="60px"
                  color={Theme.textColors.white}
                  backgroundColor={Theme.colors.lightGreen}
                  margin="30px auto"
                  borderRadius={Theme.borderRadius}
                  boxShadow={'0 5px 0 ' + Theme.colors.darkGreen}
                  fontSize={Theme.fontSizes.xxlarge}
                  zIndex="2"
                  onClick={() => {
                    if (solution === stage.stage.puzzle.solution && percentage !== 100) {
                      gameIsSolved()
                    } else if (solution === stage.stage.puzzle.solution && percentage === 100) {
                      saveAndExit()
                    } else {
                      setError(true)
                      setTimeout(() => {
                        setError(false)
                      }, 500)
                    }
                  }}
                >
                  {percentage === 100 ? 'Weiter' : 'Überprüfen'}
                </Button>
              ) : (
                <React.Fragment />
              )}
              {showHint ? (
                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  zIndex="1"
                  borderRadius="12px 12px 0px 0px"
                  backgroundColor={Theme.colors.overlay}
                >
                  <Flex
                    width="100%"
                    height="50%"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text
                      margin={stage.stage.puzzle.hint !== '' ? '10px auto 5px auto' : '0'}
                      color={Theme.textColors.darkGreen}
                      fontSize={
                        stage.stage.puzzle.hint !== ''
                          ? Theme.fontSizes.normal
                          : Theme.fontSizes.xlarge
                      }
                    >
                      {stage.stage.puzzle.hint !== ''
                        ? 'Der nächste Hinweis:'
                        : 'Toll, das Rätsel ist gelöst!'}
                    </Text>
                    {stage.stage.puzzle.hint !== '' ? (
                      <Text
                        margin="0 auto"
                        color={Theme.textColors.darkGreen}
                        fontSize={Theme.fontSizes.xlarge}
                      >
                        {stage.stage.puzzle.hint}
                      </Text>
                    ) : (
                      <React.Fragment />
                    )}
                  </Flex>
                </Box>
              ) : (
                <React.Fragment />
              )}
            </Flex>
          </Container>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  )
}
