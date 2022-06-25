// Components
import Login from './Login'
import Register from './Register'

const AuthModal = ({ opened, setOpened, modalType, setModalType }) => {
  if (modalType === 'login') {
    return (
      <Login
        opened={opened}
        setOpened={setOpened}
        setModalType={setModalType}
      />
    )
  } else if (modalType === 'register') {
    return (
      <Register
        opened={opened}
        setOpened={setOpened}
        setModalType={setModalType}
      />
    )
  } else {
    return null
  }
}

export default AuthModal
