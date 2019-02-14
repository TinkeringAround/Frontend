import Head from 'next/head'

export default () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        background: #fff;
        margin: 0;
        font-size: 12px;
      }
    `}</style>
  </>
)
