// Atoms
import Container from '../atoms/Container'

// Layout
import Meta from '../components/Meta'
import Header from '../components/Header'
import Content from './Content'
import Footer from '../components/Footer'

//--------------------------------------------------------------------------//
export interface Props {
  children?: any
}

//--------------------------------------------------------------------------//
export default (props: Props) => {
  const { children } = props

  return (
    <>
      <Meta />
      <Container
        width="100vw"
        height="100vh"
        margin="0"
        padding="0"
        style={{ flexDirection: 'column' }}
      >
        <Header height="100px" backgroundColor="#FAB" />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  )
}
