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
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from 'firebase/auth'
import { useAuth } from '../../config/store'

const LoginModal = ({ opened, setOpened, setModalType }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const setCurrentUser = useAuth((state) => state.setCurrentUser)

  const onLoginHandler = (e) => {
    e.preventDefault()

    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)

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

  const loginWithGoogle = () => {
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

  const loginWithTwitter = () => {
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
      title="Login to continue"
    >
      <form onSubmit={onLoginHandler}>
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
              onClick={() => setModalType('register')}
            >
              Don&#39;t have an account? Register
            </Text>
            <Button type="submit">Login</Button>
          </Group>
        </Stack>
      </form>
      <Stack style={{ marginTop: 20 }}>
        <Divider my="sm" />
        <Text align="center" size="sm" color="dark">
          or continue with these social profiles
        </Text>
        <Group position="center" spacing="xl">
          <Box onClick={loginWithGoogle} sx={{ cursor: 'pointer' }}>
            <BrandGoogle alt={20} />
          </Box>
          <Box onClick={loginWithTwitter} sx={{ cursor: 'pointer' }}>
            <BrandTwitter alt={20} />
          </Box>
        </Group>
      </Stack>
    </Modal>
  )
}

export default LoginModal
