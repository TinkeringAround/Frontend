// Atoms
import Flex from '../atoms/Flex'

//--------------------------------------------------------------------------//
export interface Props {
  children?: any
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { children } = props

  return (
    <Flex width="100vw" height="100px" justifyContent="center" backgroundColor="lightgrey">
      <h6>"Made with Love. Establieshed 2019."</h6>
      {children}
      <style jsx>{`
        h6 {
          font-size: 1.2rem;
        }
      `}</style>
    </Flex>
  )
}
