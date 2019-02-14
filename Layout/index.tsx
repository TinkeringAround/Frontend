// Atoms
import Container from '../atoms/Container'

// Layout
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'

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
        style={{
          flexDirection: 'column'
        }}
      >
        <Header height="100px" backgroundColor="#7db9e8" style={{ position: 'sticky', top: '0' }} />
        <Content
          style={{ background: 'linear-gradient(to bottom, #7db9e8 0%,#fcfcfc 54%,#fcfcfc 100%);' }}
        >
          {children}
        </Content>
        <Footer />
      </Container>
    </>
  )
}
