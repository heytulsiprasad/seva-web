import NavBar from './NavBar'
import Head from 'next/head'
import Footer from './Footer'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
