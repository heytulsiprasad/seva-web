import Link from 'next/link'
import { useState } from 'react'
import { Button, Avatar } from '@mantine/core'

// Components
import AuthModal from './AuthModal/index'

// Store
import { useAuth } from '../config/store'

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [opened, setOpened] = useState(false)
  const [modalType, setModalType] = useState('login') // login or register

  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const { photoURL } = useAuth((state) => state.currentUser)

  return (
    <>
      <nav className="navigation" style={{ alignSelf: 'flex-start' }}>
        <Link href="/">
          <a
            className="brand-name"
            style={{
              fontWeight: '800',
              fontFamily: 'sans-serif',
              fontSize: 20,
              color: '#3D7FFF',
            }}
          >
            Seva<span style={{ color: '#FF792E' }}>.</span>
          </a>
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            <li>
              <Button variant="subtle" color="dark">
                <Link style={{ fontSize: 14, paddingTop: 10 }} href="/home">
                  Doctors
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="subtle" color="dark">
                <Link style={{ fontSize: 14, paddingTop: 10 }} href="/about">
                  Hospitals
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="subtle" color="dark">
                <Link style={{ fontSize: 14, paddingTop: 10 }} href="/contact">
                  About Us
                </Link>
              </Button>
            </li>
            {!isAuthenticated ? (
              <>
                <li>
                  <Button
                    variant="subtle"
                    color="orange"
                    onClick={() => {
                      setOpened(true)
                      setModalType('login')
                    }}
                  >
                    Log In
                  </Button>
                </li>
                <li>
                  <Button
                    color="orange"
                    onClick={() => {
                      setOpened(true)
                      setModalType('register')
                    }}
                  >
                    Sign Up
                  </Button>
                </li>
              </>
            ) : (
              <Avatar src={photoURL} radius="xl" sx={{ cursor: 'pointer' }} />
            )}
          </ul>
        </div>
      </nav>
      <AuthModal
        opened={opened}
        setOpened={setOpened}
        modalType={modalType}
        setModalType={setModalType}
      />
    </>
  )
}

export default NavBar
