import Layout from '../Layout'

//-------------------------------------------------------------------------//
export default (props: any) => {
  return (
    <Layout>
      <h1>Das ist die Index Page</h1>
      <style jsx>{`
        h1 {
          margin: 0;
          padding: 20px 20px;
        }
      `}</style>
    </Layout>
  )
}
