import React, { useContext } from 'react'

// Context
import AppContext from '../../../context/app-context'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Text from '../../atoms/Text'
import SVG from '../../atoms/Svg'
import Button from '../../atoms/Button'
import Box from '../../atoms/Box'

// Components
import Progressbar from '../../Progressbar'

// Icons
import Icons from '../../../assets/icons'

//--------------------------------------------------------------------------//
export default props => {
  const appContext = useContext(AppContext)
  const { setActivity } = appContext
  const { activity } = props

  const countPuzzles = activity => {
    let puzzles = 0
    activity.game.levels.forEach(level => {
      puzzles = puzzles + level.stages.length
    })
    return puzzles
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
      backgroundColor={Theme.colors.lightBlue}
      height="95%"
      width="95%"
      margin="20px 10px"
      borderRadius="12px"
      boxShadow="0px 0px 10px 1px rgba(0,0,0,0.15)"
    >
      <Button
        margin="0 0 0 5%"
        width="95%"
        height="auto"
        backgroundColor={Theme.colors.white}
        borderRadius="0 12px 12px 0"
        onClick={() => {
          setActivity(activity)
        }}
      >
        <Flex
          flexDirection="column"
          width="100%"
          height="100%"
          margin="0"
          justifyContent="flex-start"
        >
          <Text
            margin="20px auto"
            height="30px"
            width="100%"
            textAlign="center"
            color={Theme.textColors.darkGrey}
            fontSize={Theme.fontSizes.xxxlarge}
          >
            {activity.game.title}
          </Text>

          <Flex
            width="100%"
            height="25px"
            justfiyContent="flex-start"
            alignItems="center"
            margin="0 auto"
          >
            <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
              <SVG
                width="20px"
                height="20px"
                margin="0"
                fill={Theme.colors.yellow}
                viewBox={Icons.getSVG('star').viewBox}
              >
                {Icons.getSVG('star').path}
              </SVG>
              <Text
                margin="0 20px 0 10px"
                textAlign="center"
                fontSize={Theme.fontSizes.medium}
                color={Theme.textColors.darkGrey}
              >
                {activity.game.levels.length + ' Level'}
              </Text>
              <SVG
                width="20px"
                height="20px"
                margin="0 0 0 20px"
                fill={Theme.colors.yellow}
                viewBox={Icons.getSVG('dice').viewBox}
              >
                {Icons.getSVG('dice').path}
              </SVG>
              <Text
                margin="0 0 0 10px"
                textAlign="center"
                fontSize={Theme.fontSizes.medium}
                color={Theme.textColors.darkGrey}
              >
                {countPuzzles(activity) + ' Rätsel'}
              </Text>
            </Flex>
          </Flex>

          <Flex
            width="80%"
            height="50px"
            justifyContent="center"
            alignItems="center"
            margin="10px auto 20px auto"
          >
            <Progressbar
              styles={{
                color: Theme.colors.lightBlue,
                backgroundColor: Theme.colors.lightGrey,
                width: '100%',
                height: '15px'
              }}
              fullWidth
              showText
              percentage={calculateSolved(activity)}
            />
          </Flex>
        </Flex>
      </Button>
    </Box>
  )
}
