//--------------------------------------------------------------------------//
export interface Props {
  children?: any
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { children } = props

  return (
    <div className="content">
      {children}
      <style jsx>{`
        .content {
          width: 100%;
          height: 70%;
        }
      `}</style>
    </div>
  )
}
