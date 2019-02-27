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
import CirclePuzzle from './puzzles/circle'
import Modal from './modal'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)
  const { stage, setStage, setActivity } = appContext
  const [percentage, setPercentage] = useState(10)
  const [solution, setSolution] = useState('')
  const [error, setError] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [textSolution, setTextSolution] = useState(true)
  const [showHelp, setShowHelp] = useState(false)
  const [loading, setLoading] = useState(true)

  if (loading && stage != null) {
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }

  const saveAndExit = () => {
    // if solution is correct => showHint === true
    if (showHint) {
      // save
    }
    // then exit
    setShowHint(false)
    setPercentage(10)
    setSolution('')
    setTextSolution(true)
    setStage(null)
    setActivity(null)
    setLoading(true)
  }

  const gameIsSolved = () => {
    setTextSolution(true)
    setSolution(stage.data.solution)
    setPercentage(100)
    setShowHint(true)
  }

  let component = ''
  if (stage != null) {
    switch (stage.data.type) {
      case 'text': {
        component = <TextPuzzle stage={stage.data} />
        break
      }
      case 'matrix': {
        component = (
          <MatrixPuzzle stage={stage.data} solved={stage.solved} gameIsSolved={gameIsSolved} />
        )
        if (textSolution) setTextSolution(false)
        break
      }
      case 'word': {
        component = <WordPuzzle stage={stage.data} />
        break
      }
      case 'circle': {
        component = (
          <CirclePuzzle stage={stage.data} solved={stage.solved} gameIsSolved={gameIsSolved} />
        )
        if (textSolution) setTextSolution(false)
        break
      }
      default: {
        component = 'Test'
      }
    }
  }

  if (stage != null && stage.solved && percentage !== 100) {
    gameIsSolved()
  }

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment />
      ) : stage != null ? (
        <React.Fragment>
          {showHelp && !showHint && percentage !== 100 ? (
            <Modal helpText={stage.data.help} setShowHelp={setShowHelp} />
          ) : (
            <React.Fragment />
          )}
          <Container height="10%" width="100%" position="absolute" top="0px" left="0px">
            <Flex width="100%" height="100%" justifyContent="flex-start" alignItems="center">
              <Button margin="0 20px" width="40px" height="40px" onClick={saveAndExit}>
                <SVG
                  width="40px"
                  height="40px"
                  fill={Theme.colors.darkGrey}
                  viewBox={icons.getSVG('close').viewBox}
                >
                  {icons.getSVG('close').path}
                </SVG>
              </Button>
              <Progressbar
                fullWidth
                styles={{
                  height: '20px',
                  color: Theme.colors.darkGreen,
                  backgroundColor: Theme.colors.lightGrey
                }}
                percentage={percentage}
              />
              <Button
                margin="0 20px"
                width="40px"
                height="40px"
                onClick={() => setShowHelp(!showHelp)}
              >
                <SVG
                  width="30px"
                  height="30px"
                  fill={!showHint ? Theme.colors.darkGrey : Theme.colors.lightGrey}
                  viewBox={icons.getSVG('help').viewBox}
                >
                  {icons.getSVG('help').path}
                </SVG>
              </Button>
            </Flex>
          </Container>
          <Container height="65%" width="100%" position="absolute" top="10%" left="0px">
            {component}
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
                  borderRadius={Theme.borderRadius.small}
                  boxShadow={'0 5px 0 ' + Theme.colors.darkGreen}
                  fontSize={Theme.fontSizes.xxlarge}
                  zIndex="2"
                  onClick={() => {
                    if (solution === stage.data.solution && percentage !== 100) {
                      gameIsSolved()
                    } else if (solution === stage.data.solution && percentage === 100) {
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
                  borderRadius={`${Theme.borderRadius.small} ${Theme.borderRadius.small} 0px 0px`}
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
                      margin={stage.data.hint !== '' ? '10px auto 5px auto' : '0'}
                      color={Theme.textColors.Green}
                      fontSize={
                        stage.data.hint !== '' ? Theme.fontSizes.normal : Theme.fontSizes.xlarge
                      }
                    >
                      {stage.data.hint !== ''
                        ? 'Der nächste Hinweis:'
                        : 'Toll, du hast das Rätsel gelöst!'}
                    </Text>
                    {stage.data.hint !== '' ? (
                      <Text
                        margin="0 auto"
                        color={Theme.textColors.Green}
                        fontSize={Theme.fontSizes.xlarge}
                      >
                        {stage.data.hint}
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
