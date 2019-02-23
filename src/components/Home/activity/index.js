import React from 'react'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import SVG from '../../atoms/Svg'

// Components
import Progressbar from '../../Progressbar'

// Icons
import Icons from '../../../assets/icons'
import Button from '../../atoms/Button'

//--------------------------------------------------------------------------//
export default props => {
  const { activity, toLevels } = props

  const countPuzzles = activity => {
    let puzzles = 0
    activity.game.levels.forEach(level => {
      puzzles = puzzles + level.stages.length
    })
    return puzzles + ' Rätsel'
  }

  const calculateSolved = activity => {
    const { meta, game, achievements } = activity

    if (meta.completed) return 100

    let solved = 0,
      total = 0

    game.levels.forEach((level, index) => {
      level.stages.forEach((stage, stageIndex) => {
        total = total + 1
        if (stage.puzzle.solution === achievements[index].forLevels[stageIndex]) solved = solved + 1
      })
    })

    return parseInt((100 * (1.0 * solved)) / total)
  }

  return (
    <Box
      margin="15px auto"
      width="100%"
      height="450px"
      backgroundColor={Theme.colors.lightBlue}
      borderRadius={Theme.borderRadius}
    >
      <Flex
        flexDirection="column"
        width="100%"
        height="100%"
        margin="0"
        justifyContent="flex-start"
      >
        <Text
          margin="30px auto 10px auto"
          height="35px"
          color={Theme.textColors.white}
          fontSize={Theme.fontSizes.xxxlarge}
        >
          {activity.game.title}
        </Text>
        <Flex margin="0px" width="100%" height="150px" justifyContent="space-between">
          <Flex flexDirection="column" justfiyContent="center" width="50%" height="150px">
            <SVG
              width="80px"
              height="80px"
              margin="0 auto"
              fill={Theme.colors.yellow}
              viewBox={Icons.getSVG('star').viewBox}
            >
              {Icons.getSVG('star').path}
            </SVG>
            <Text
              margin="10px auto 0 auto"
              textAlign="center"
              fontSize={Theme.fontSizes.xlarge}
              color={Theme.textColors.darkGrey}
            >
              {activity.game.levels.length + ' Level'}
            </Text>
          </Flex>
          <Flex flexDirection="column" justfiyContent="center" width="50%" height="150px">
            <SVG
              width="80px"
              height="80px"
              margin="0 auto"
              fill={Theme.colors.yellow}
              viewBox={Icons.getSVG('dice').viewBox}
            >
              {Icons.getSVG('dice').path}
            </SVG>
            <Text
              margin="10px auto 0 auto"
              textAlign="center"
              fontSize={Theme.fontSizes.xlarge}
              color={Theme.textColors.darkGrey}
            >
              {countPuzzles(activity)}
            </Text>
          </Flex>
        </Flex>
        <Flex margin="10px 0 0 0" width="100%" height="60px" justifyContent="center">
          <Progressbar
            showText
            backgroundColor={Theme.colors.darkBlue}
            color={Theme.colors.white}
            percentage={calculateSolved(activity)}
          />
        </Flex>
        <Flex width="100%" height="70px" justifyContent="center" alignItems="center">
          <Button
            width="80%"
            height="60px"
            margin="0 auto"
            backgroundColor={Theme.colors.white}
            color={Theme.textColors.darkGrey}
            fontSize={Theme.fontSizes.xxxlarge}
            borderRadius={Theme.borderRadius}
            boxShadow={'0 5px 0 ' + Theme.colors.darkGrey}
            onClick={() => {
              console.log('To Levels...')
              toLevels(activity)
            }}
          >
            Spielen
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
