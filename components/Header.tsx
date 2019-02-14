// Atoms
import Flex from '../atoms/Flex'

//--------------------------------------------------------------------------//
export interface Props {
  style?: React.CSSProperties
  height?: string
  backgroundColor?: string
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { style, height, backgroundColor } = props

  const Styles = {
    height: height ? height : 'auto',
    backgroundColor: backgroundColor ? backgroundColor : '#FFF',
    ...style
  }

  return (
    <Flex style={Styles}>
      <h1>PuzzleYOU</h1>
      <style jsx>{`
        h1 {
          padding: 25px;
          margin: 0;
          font-size: 20px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
      `}</style>
    </Flex>
  )
}
