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
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

const LoginModal = ({ opened, setOpened, setModalType }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginHandler = (e) => {
    e.preventDefault()

    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        console.log(user)

        console.log({ email, password })
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
            label="Passowrd"
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
          <Box>
            <BrandGoogle alt={20} />
          </Box>
          <Box>
            <BrandTwitter alt={20} />
          </Box>
        </Group>
      </Stack>
    </Modal>
  )
}

export default LoginModal
