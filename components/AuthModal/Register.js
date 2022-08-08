import { useState } from 'react'
import {
  Modal,
  TextInput,
  Stack,
  Text,
  Button,
  Group,
  Divider,
  Box,
} from '@mantine/core'
import { Mail, Lock, BrandGoogle, BrandTwitter } from 'tabler-icons-react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'
import { useStore } from '../../config/store'

const RegisterModal = ({ opened, setOpened, setModalType }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setCurrentUser = useStore((state) => state.setCurrentUser)

  const onRegisterHandler = (e) => {
    e.preventDefault()

    const auth = getAuth()

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log({ user })

          setCurrentUser({ currentUser: user, isAuthenticated: true })
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          setEmail('')
          setPassword('')
          setOpened(false)
        })
    }
  }

  const registerWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user
        console.log(user)

        setCurrentUser({ currentUser: user, isAuthenticated: true })
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setOpened(false)
      })
  }

  const registerWithTwitter = () => {
    const provider = new TwitterAuthProvider()

    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user
        console.log(user)

        setCurrentUser({ currentUser: user, isAuthenticated: true })
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setOpened(false)
      })
  }

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="lg"
      title="Register to continue"
    >
      <form onSubmit={onRegisterHandler}>
        <Stack>
          <TextInput
            placeholder="Your Email"
            label="Email"
            type="email"
            required
            icon={<Mail size={14} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            placeholder="Password"
            label="Password"
            type="password"
            required
            icon={<Lock size={14} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Group position="apart" style={{ marginTop: 10 }}>
            <Text
              color="dimmed"
              size="xs"
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                },
              }}
              onClick={() => setModalType('login')}
            >
              Already have an account? Login
            </Text>
            <Button type="submit">Register</Button>
          </Group>
        </Stack>
      </form>
      <Stack style={{ marginTop: 20 }}>
        <Divider my="sm" />
        <Text align="center" size="sm" color="dark">
          or continue with these social profiles
        </Text>
        <Group position="center" spacing="xl">
          <Box onClick={registerWithGoogle} sx={{ cursor: 'pointer' }}>
            <BrandGoogle alt={20} />
          </Box>
          <Box onClick={registerWithTwitter} sx={{ cursor: 'pointer' }}>
            <BrandTwitter alt={20} />
          </Box>
        </Group>
      </Stack>
    </Modal>
  )
}

export default RegisterModal
