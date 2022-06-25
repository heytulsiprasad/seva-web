// Components
import Login from './Login'
import Register from './Register'

const AuthModal = ({ opened, setOpened, modalType, setModalType }) => {
  console.log({ modalType })

  return modalType === 'login' ? (
    <Login opened={opened} setOpened={setOpened} setModalType={setModalType} />
  ) : (
    <Register
      opened={opened}
      setOpened={setOpened}
      setModalType={setModalType}
    />
  )
}

export default AuthModal
