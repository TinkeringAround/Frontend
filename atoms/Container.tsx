export interface Props {
  children?: any
  margin?: string
  padding?: string
  width?: string
  height?: string
  style?: React.CSSProperties
}

export default (props: Props) => {
  const { children, margin, padding, width, height, style } = props

  const defaultStyles = {
    margin: margin ? margin : '0',
    padding: padding ? padding : '0',
    width: width ? width : '100%',
    height: height ? height : '100%'
  }

  return (
    <div className="container" style={style}>
      {children}
      <style jsx>{`
        .container {
          display: flex;
          margin: ${defaultStyles.margin};
          padding: ${defaultStyles.padding};
          width: ${defaultStyles.width};
          height: ${defaultStyles.height};
        }
      `}</style>
    </div>
  )
}
