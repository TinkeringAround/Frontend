import React from 'react'

// Images
import spinner from '../../assets/images/Loading.gif'

export default () => {
  return (
    <div
      style={{
        margin: '200px auto'
      }}
    >
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: '50px',
          height: '50px',
          margin: 'auto',
          display: 'block'
        }}
      />
    </div>
  )
}
