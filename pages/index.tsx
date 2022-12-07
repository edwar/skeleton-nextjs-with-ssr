import styles from '../styles/Home.module.css'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { getAuth, signOut } from 'firebase/auth'
import Header from '../components/Header'

const Home = () => {
  const AuthUser = useAuthUser()
  return (
    <>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <div className={styles.container}>
        <div style={styles.infoTextContainer}>
          <h3>Home</h3>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Home)
