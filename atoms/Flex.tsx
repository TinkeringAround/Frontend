//--------------------------------------------------------------------------//
export interface Props {
  children: any
  height?: string
  width?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  backgroundColor?: string
  style?: React.CSSProperties
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const {
    children,
    width,
    height,
    flexDirection,
    justifyContent,
    alignItems,
    backgroundColor,
    style
  } = props

  const Styles = {
    width: width ? width : 'auto',
    height: height ? height : 'auto',
    flexDirection: flexDirection ? flexDirection : 'row',
    justifyContent: justifyContent ? justifyContent : 'flex-start',
    alignItems: alignItems ? alignItems : 'center',
    backgroundColor: backgroundColor ? backgroundColor : '#FFF'
  }

  return (
    <div className="flex" style={style}>
      {children}
      <style jsx>{`
        .flex {
          display: flex;
          flex-direction: ${Styles.flexDirection};
          justify-content: ${Styles.justifyContent};
          align-items: ${Styles.alignItems};

          width: ${Styles.width};
          height: ${Styles.height};
          background-color: ${Styles.backgroundColor};
        }
      `}</style>
    </div>
  )
}
