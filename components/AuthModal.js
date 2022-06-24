import {
  Modal,
  TextInput,
  Stack,
  Text,
  Button,
  Group,
  Divider,
  Center,
  Box,
} from '@mantine/core'
import {
  Mail,
  Lock,
  BrandGoogle,
  BrandGithub,
  BrandTwitter,
  BrandFacebook,
} from 'tabler-icons-react'

const AuthModal = ({ opened, setOpened, modalType, setModalType }) => {
  console.log({ modalType })

  return modalType === 'login' ? (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="lg"
      title="Login to continue"
    >
      <form>
        <Stack>
          <TextInput
            placeholder="Your Email"
            label="Email"
            type="email"
            required
            icon={<Mail size={14} />}
          />
          <TextInput
            placeholder="Password"
            label="Passowrd"
            type="password"
            required
            icon={<Lock size={14} />}
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
              Don't have an account? Register
            </Text>
            <Button>Login</Button>
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
            <BrandFacebook alt={20} />
          </Box>
          <Box>
            <BrandGithub alt={20} />
          </Box>
          <Box>
            <BrandTwitter alt={20} />
          </Box>
        </Group>
      </Stack>
    </Modal>
  ) : (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      size="lg"
      title="Register to continue"
    >
      <form>
        <Stack>
          <TextInput
            placeholder="Your Email"
            label="Email"
            type="email"
            required
            icon={<Mail size={14} />}
          />
          <TextInput
            placeholder="Password"
            label="Passowrd"
            type="password"
            required
            icon={<Lock size={14} />}
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
            <Button>Register</Button>
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
            <BrandFacebook alt={20} />
          </Box>
          <Box>
            <BrandGithub alt={20} />
          </Box>
          <Box>
            <BrandTwitter alt={20} />
          </Box>
        </Group>
      </Stack>
    </Modal>
  )
}

export default AuthModal
