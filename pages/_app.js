import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/infocards.css'
import '../styles/hero.css'

import styled from 'styled-components'
import { MantineProvider } from '@mantine/core'

const Container = styled.main`
  flex: 1;
`

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </MantineProvider>
  )
}

export default MyApp
