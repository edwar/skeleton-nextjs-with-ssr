import React from 'react'
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserSSR,
} from 'next-firebase-auth'

const Demo = () => {
  const authUser = useAuthUser()
  return (
    <div>
      <p>Your email is {authUser.email ? authUser.email : 'unknown'}.</p>
    </div>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(ctx => {
  return {
    props: {}
  }
})

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Demo)