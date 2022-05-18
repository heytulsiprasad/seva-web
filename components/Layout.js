import NavBar from './NavBar'
import Head from 'next/head'
import Footer from './Footer'

const layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default layout