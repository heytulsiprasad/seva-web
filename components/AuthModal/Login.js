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

const LoginModal = ({ opened, setOpened, setModalType }) => (
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
            Don&#39;t have an account? Register
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
          <BrandTwitter alt={20} />
        </Box>
      </Group>
    </Stack>
  </Modal>
)

export default LoginModal
