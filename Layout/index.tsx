// Layout
import Meta from './Meta'
import Body from './Body'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

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
      <Body>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Body>
    </>
  )
}
