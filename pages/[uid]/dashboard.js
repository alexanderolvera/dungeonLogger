import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

import { auth } from '../../lib/firebase'
import { signOut } from 'firebase/auth'

import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction
} from 'next-firebase-auth'
import LoadingBar from '../../components/LoadingBar'

const Dashboard = function () {
  const AuthUser = useAuthUser()
  const router = useRouter()
  const { uid } = router.query

  const handleSignOut = async () => {
    await signOut(auth)
  }

  return (
    <>
      <h3>Dashboard Component</h3>
      <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
      <Button onClick={handleSignOut} variant='error'>SignOut</Button>
      <Container>
        <Row>
          <Col md={4} >
            <h6>My Campaigns</h6>
            <Stack gap={2} className='border rounded shadow p-2'>
              <div className="bg-light border rounded">First item</div>
              <div className="bg-light border rounded">Second item</div>
              <div className="bg-light border rounded">Third item</div>
            </Stack>
          </Col>
          <Col md={{ span: 4, offset: 4 }} >
            <h6>My Upcoming Adventures</h6>
            <Stack gap={2} className='border rounded shadow p-2'>
              <div className="bg-light border rounded">First item</div>
              <div className="bg-light border rounded">Second item</div>
              <div className="bg-light border rounded">Third item</div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/login',
  LoaderComponent: LoadingBar
})(Dashboard)