import React, { useState, useEffect } from 'react'

// Atoms
import Text from '../../atoms/Text'
import Theme from '../../../theme'
import Grid from '../../atoms/Grid'
import Child from '../../atoms/GridChild'
import Button from '../../atoms/Button'

//--------------------------------------------------------------------------//
export default props => {
  const { stage, solved, gameIsSolved } = props
  const [splitSolutions] = useState(stage.puzzle.solution.split(','))
  const [playground, setPlayground] = useState(() => {
    let pg = []
    for (let row = 0; row <= 6; row++) {
      pg[row] = [false, false, false, false]
    }
    return pg
  })
  const [tmpSolution, settmpSolution] = useState(() => {
    let solution = []

    splitSolutions.forEach(item => {
      solution[item] = false
    })
    return solution
  })
  const [finished, setFinished] = useState(solved)

  useEffect(() => {
    let tmpFinished = true
    splitSolutions.forEach(solution => {
      if (!tmpSolution[solution]) tmpFinished = false
    })

    for (let row = 0; row <= 6; row++) {
      for (let column = 0; column <= 3; column++) {
        const mark = `${row + 1}${column + 1}`
        if (playground[row][column] && !markIsPartOfSolution(mark)) {
          tmpFinished = false
          break
        }
      }
    }

    if (tmpFinished) {
      setTimeout(() => {
        setFinished(true)
        gameIsSolved()
      }, 200)
    }
  }, [playground])

  const gridTemplateColums = '20% 20% 20% 20% 20%'
  const gridTemplateRows = '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%'

  const updatePlayground = (row, column) => {
    const tmp = Array.from(playground)
    tmp[row][column] = !tmp[row][column]

    setPlayground(tmp)
  }

  const updateSolution = mark => {
    const tmp = Array.from(tmpSolution)
    tmp[mark] = !tmp[mark]

    settmpSolution(tmp)
  }

  const markIsPartOfSolution = mark => {
    return splitSolutions.includes(mark)
  }

  const renderChild = (row, column) => {
    const mark = `${row}${column}`

    return (
      <Child>
        <Button
          width="60%"
          height="75%"
          borderRadius="50px"
          backgroundColor={
            finished && markIsPartOfSolution(mark)
              ? Theme.colors.darkGreen
              : playground[row - 1][column - 1]
              ? Theme.colors.yellow
              : Theme.colors.lightGrey
          }
          onClick={
            markIsPartOfSolution(mark)
              ? () => {
                  updatePlayground(row - 1, column - 1)
                  updateSolution(mark)
                }
              : () => {
                  updatePlayground(row - 1, column - 1)
                }
          }
        />
      </Child>
    )
  }

  return (
    <Grid
      gridTemplateColumns={gridTemplateColums}
      gridTemplateRows={gridTemplateRows}
      backgroundColor="transparent"
      width="90%"
      height="90%"
    >
      <Child />
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          A
        </Text>
      </Child>
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          B
        </Text>
      </Child>
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          C
        </Text>
      </Child>
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          D
        </Text>
      </Child>
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          E
        </Text>
      </Child>
      {renderChild(1, 1)}
      {renderChild(1, 2)}
      {renderChild(1, 3)}
      {renderChild(1, 4)}
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          F
        </Text>
      </Child>
      {renderChild(2, 1)}
      {renderChild(2, 2)}
      {renderChild(2, 3)}
      {renderChild(2, 4)}
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          G
        </Text>
      </Child>
      {renderChild(3, 1)}
      {renderChild(3, 2)}
      {renderChild(3, 3)}
      {renderChild(3, 4)}
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          H
        </Text>
      </Child>
      {renderChild(4, 1)}
      {renderChild(4, 2)}
      {renderChild(4, 3)}
      {renderChild(4, 4)}
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          I
        </Text>
      </Child>
      {renderChild(5, 1)}
      {renderChild(5, 2)}
      {renderChild(5, 3)}
      {renderChild(5, 4)}
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          J
        </Text>
      </Child>
      {renderChild(6, 1)}
      {renderChild(6, 2)}
      {renderChild(6, 3)}
      {renderChild(6, 4)}
      <Child>
        <Text
          fontSize={Theme.fontSizes.xxxlarge}
          fontFamily={Theme.fonts.greek}
          color={Theme.textColors.darkGrey}
        >
          K
        </Text>
      </Child>
      {renderChild(7, 1)}
      {renderChild(7, 2)}
      {renderChild(7, 3)}
      {renderChild(7, 4)}
    </Grid>
  )
}
