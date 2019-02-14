//--------------------------------------------------------------------------//
export interface Props {
  children?: any
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { children } = props

  return (
    <div className="footer">
      <h6>"Made with Love. Establieshed 2019."</h6>
      {children}
      <style jsx>{`
        .footer {
          width: 100vw;
          height: 10%;
        }
      `}</style>
    </div>
  )
}
