import Container from '../atoms/Container'

//--------------------------------------------------------------------------//
export interface Props {
  children?: any
  width?: string
  height?: string
  style?: React.CSSProperties
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { children, width, height, style } = props

  const Styles = {
    width: width ? width : '100vw',
    height: height ? height : '100vh',
    ...style
  }

  return <Container style={Styles}>{children}</Container>
}
