import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'

import styled from "styled-components"

const Container = styled.main`
  flex: 1
`

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Container>
      <Component {...pageProps} />
      </Container>
    </Layout>
  )
}

export default MyApp
