import React, { useState, useEffect } from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Grid from '../../atoms/Grid'
import Child from '../../atoms/GridChild'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import Button from '../../atoms/Button'
import Flex from '../../atoms/Flex'
import Container from '../../atoms/Container'

// Hooks
import useMedia from '../../hooks/useMedia'

// Elements
const elements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B']

//--------------------------------------------------------------------------//
export default props => {
  const { stage, solved, gameIsSolved } = props
  const isLarge = useMedia(['(min-width: 410px)'], [true], false)
  const [splitSolutions] = useState(stage.solution.split(','))
  const [playground, setPlayground] = useState(() => {
    let tmp = []
    elements.forEach((element, index) => {
      tmp[index] = false
    })
    return tmp
  })
  const [solution, setSolution] = useState([])
  const [finished, setFinished] = useState(solved)

  // Circle Sizing
  const buttonSize = isLarge ? '69px' : '60px'
  const middleGap = '10px'
  const rowGap = isLarge ? '20px' : '18px'
  const gapSize = isLarge ? '40px' : '35px'

  useEffect(() => {
    if (solution.join(',') === stage.solution) {
      setTimeout(() => {
        setFinished(true)
        gameIsSolved()
      }, 200)
    }
  }, [solution])

  const updateSolution = index => {
    let tmp = Array.from(playground)
    tmp[index] = !tmp[index]
    setPlayground(tmp)

    let newSolution = Array.from(solution)
    if (!tmp[index]) newSolution.splice(solution.indexOf(textFromIndex(index)), 1)
    else newSolution.push(textFromIndex(index))

    setSolution(newSolution)
  }

  const indexIsPartOfSolution = index => splitSolutions.includes(textFromIndex(index))
  const textFromIndex = index => elements[index]

  const renderButton = index => (
    <Button
      backgroundColor={
        finished && indexIsPartOfSolution(index)
          ? Theme.colors.darkGreen
          : playground[index]
          ? Theme.colors.yellow
          : Theme.colors.darkGrey
      }
      width={buttonSize}
      height={buttonSize}
      borderRadius={Theme.borderRadius.large}
      onClick={() => updateSolution(index)}
    >
      <Box
        width="65%"
        height="65%"
        backgroundColor={Theme.colors.white}
        borderRadius={Theme.borderRadius.large}
      >
        <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
          <Text
            width="100%"
            height={Theme.fontSizes.xxlarge}
            margin="0"
            textAlign="center"
            fontSize={Theme.fontSizes.xxlarge}
            fontFamily={Theme.fonts.greek}
            color={Theme.textColors.darkGrey}
          >
            {textFromIndex(index)}
          </Text>
        </Flex>
      </Box>
    </Button>
  )

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container width="100%" height="auto">
        <Grid
          gridTemplateColumns={`auto ${buttonSize} ${middleGap} ${buttonSize} auto`}
          gridTemplateRows="auto"
          backgroundColor="transparent"
          width="90%"
          height={buttonSize}
        >
          <Child />
          <Child>{renderButton(11)}</Child>
          <Child />
          <Child>{renderButton(0)}</Child>
          <Child />
        </Grid>
        <Grid
          margin={`-${rowGap} auto 0 auto`}
          gridTemplateColumns={`auto ${buttonSize} ${buttonSize} ${middleGap} ${buttonSize} ${buttonSize} auto`}
          gridTemplateRows="auto"
          backgroundColor="transparent"
          width="90%"
          height={buttonSize}
        >
          <Child />
          <Child>{renderButton(10)}</Child>
          <Child />
          <Child />
          <Child />
          <Child>{renderButton(1)}</Child>
          <Child />
        </Grid>
        <Grid
          gridTemplateColumns={`${buttonSize} ${gapSize} ${buttonSize} ${middleGap} ${buttonSize} ${gapSize} ${buttonSize}`}
          gridTemplateRows="auto"
          backgroundColor="transparent"
          width="90%"
          height={buttonSize}
          margin="0 auto"
        >
          <Child>{renderButton(9)}</Child>
          <Child />
          <Child />
          <Child />
          <Child />
          <Child />
          <Child>{renderButton(2)}</Child>
        </Grid>

        <Grid
          gridTemplateColumns={`${buttonSize} ${gapSize} ${buttonSize} ${middleGap} ${buttonSize} ${gapSize} ${buttonSize}`}
          gridTemplateRows="auto"
          backgroundColor="transparent"
          width="90%"
          height={buttonSize}
          marginTop={middleGap}
        >
          <Child>{renderButton(8)}</Child>
          <Child />
          <Child />
          <Child />
          <Child />
          <Child />
          <Child>{renderButton(3)}</Child>
        </Grid>
        <Grid
          margin={`0 auto -${rowGap} auto`}
          gridTemplateColumns={`auto ${buttonSize} ${buttonSize} ${middleGap} ${buttonSize} ${buttonSize} auto`}
          gridTemplateRows="auto"
          backgroundColor="transparent"
          width="90%"
          height={buttonSize}
        >
          <Child />
          <Child>{renderButton(7)}</Child>
          <Child />
          <Child />
          <Child />
          <Child>{renderButton(4)}</Child>
          <Child />
        </Grid>
        <Grid
          gridTemplateColumns={`auto ${buttonSize} ${middleGap} ${buttonSize} auto`}
          gridTemplateRows="auto"
          backgroundColor="transparent"
          width="90%"
          height={buttonSize}
        >
          <Child />
          <Child>{renderButton(6)}</Child>
          <Child />
          <Child>{renderButton(5)}</Child>
          <Child />
        </Grid>
      </Container>
    </Flex>
  )
}
