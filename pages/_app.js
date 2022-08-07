import styled from 'styled-components'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

// CSS Styling files
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/hospitalpage.css'

import '../config/firebase'
import Layout from '../components/Layout'

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
      <NotificationsProvider>
        <Layout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
      </NotificationsProvider>
    </MantineProvider>
  )
}

export default MyApp
