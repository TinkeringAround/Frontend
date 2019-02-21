import React from 'react'

const ViewBoxes = {
  Picture: '0 0 512 512',
  Audio: '0 0 576 512',
  Matrix: '0 0 448 512',
  Scheibe: '0 0 512 512',
  Suche: '0 0 512 512',
  Text: '0 0 384 512',
  Krone: '0 0 250 250',
  Zurueck: '0 0 448 512'
}

const Paths = {
  Picture: (
    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z" />
  ),
  Audio: (
    <path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" />
  ),
  Matrix: (
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z" />
  ),
  Scheibe: (
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
  ),
  Suche: (
    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
  ),
  Text: (
    <path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z" />
  ),
  Krone: (
    <path d="M226.78,92.685c-9.864,0 -17.867,8.003 -17.867,17.867c0,2.643 0.595,5.1 1.638,7.371l-26.951,16.155c-5.732,3.424 -13.14,1.489 -16.453,-4.318l-30.337,-53.082c3.983,-3.276 6.588,-8.189 6.588,-13.773c0,-9.864 -8.003,-17.867 -17.867,-17.867c-9.865,0 -17.868,8.003 -17.868,17.867c0,5.584 2.606,10.497 6.589,13.773l-30.338,53.082c-3.313,5.807 -10.758,7.742 -16.453,4.318l-26.913,-16.155c1.005,-2.234 1.638,-4.728 1.638,-7.371c0,-9.864 -8.003,-17.867 -17.868,-17.867c-9.864,0 -17.905,8.003 -17.905,17.867c0,9.865 8.004,17.868 17.868,17.868c0.968,0 1.936,-0.149 2.866,-0.298l26.913,71.768l142.941,0l26.913,-71.768c0.931,0.149 1.899,0.298 2.866,0.298c9.865,0 17.868,-8.003 17.868,-17.868c0,-9.864 -8.003,-17.867 -17.868,-17.867Z" />
  ),
  Zurueck: (
    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
  )
}

const getSVG = type => {
  let viewBox,
    path = null

  switch (type) {
    case 'picture': {
      viewBox = ViewBoxes.Picture
      path = Paths.Picture
      break
    }
    case 'audio': {
      viewBox = ViewBoxes.Audio
      path = Paths.Audio
      break
    }
    case 'matrix': {
      viewBox = ViewBoxes.Matrix
      path = Paths.Matrix
      break
    }
    case 'scheibe': {
      viewBox = ViewBoxes.Scheibe
      path = Paths.Scheibe
      break
    }
    case 'suche': {
      viewBox = ViewBoxes.Suche
      path = Paths.Suche
      break
    }
    case 'text': {
      viewBox = ViewBoxes.Text
      path = Paths.Text
      break
    }
    case 'zurueck': {
      viewBox = ViewBoxes.Zurueck
      path = Paths.Zurueck
      break
    }
    default: {
      viewBox = ''
      path = ''
      break
    }
  }

  return {
    viewBox: viewBox,
    path: path
  }
}

export default {
  ViewBoxes,
  Paths,
  getSVG
}
