import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Button, Avatar } from '@mantine/core'
import styled from 'styled-components'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { Logout, Pacman } from 'tabler-icons-react'
import * as R from 'rambda'

// Components
import AuthModal from './AuthModal/index'

// Store
import { useStore } from '../config/store'
import { db } from '../config/firebase'

const NavBar = () => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [opened, setOpened] = useState(false)
  const [modalType, setModalType] = useState('login') // login or register

  const currentUser = useStore((state) => state.currentUser)
  const clearCurrentUser = useStore((state) => state.clearCurrentUser)

  const logoutHandler = () => {
    toggleDropdown()

    const auth = getAuth()

    signOut(auth)
      .then(() => {
        clearCurrentUser()
        console.log('Sign out successfull')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // Create entry for user in firestore
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, user.uid)
        const newUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }

        setDoc(doc(db, 'users', user.uid), newUser)
      } else {
        console.log('User signed out')
      }
    })
  }, [])

  // Change state when clicked outside of dropdown
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false)
        }
      }

      // Add event listener
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [dropdownRef, isOpen])

  return (
    <>
      <nav className="navigation" style={{ alignSelf: 'flex-start' }}>
        <Link href="/">
          <a
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
            {R.isEmpty(currentUser) ? (
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
              <AvatarContainer ref={dropdownRef}>
                <Avatar
                  src={currentUser.photoURL}
                  radius="xl"
                  sx={{ cursor: 'pointer' }}
                  onClick={toggleDropdown}
                />
                {isOpen && (
                  <Dropdown>
                    <div className="option" onClick={() => logoutHandler()}>
                      <div className="option__icon">
                        <Logout size={24} />
                      </div>
                      <span>Log out</span>
                    </div>
                    <div className="option" onClick={() => logoutHandler()}>
                      <div className="option__icon">
                        <Pacman size={24} />
                      </div>
                      <span>Profile</span>
                    </div>
                  </Dropdown>
                )}
              </AvatarContainer>
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

const AvatarContainer = styled.div`
  position: relative;
`

const Dropdown = styled.div`
  position: absolute;
  width: max-content;
  right: 0px;
  margin-top: 15px;
  padding: 4px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: rgb(0 0 0 / 5%) 0px 2px 4px;
  border-radius: 12px;

  .option {
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
      background: rgb(242, 242, 242);
      cursor: pointer;
    }

    span {
      font-weight: 600;
      font-size: 14px;
    }
  }

  .option__icon {
    margin-right: 10px;

    svg {
      display: block;
    }
  }
`

export default NavBar
