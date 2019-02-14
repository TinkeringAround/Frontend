//--------------------------------------------------------------------------//
export interface Props {
  children?: any
}

//--------------------------------------------------------------------------//
export default () => {
  return (
    <div className="header">
      <h1>Ich bin der Header</h1>
      <style jsx>{`
        .header {
          width: 100vw;
          height: 10%;
          background-color: lightgrey;
        }

        h1 {
          padding: 25px;
          margin: 0;
          font-size: 20px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
