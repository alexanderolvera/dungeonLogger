import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

const Dashboard = function () {
  const AuthUser = useAuthUser()
  const router = useRouter()
  const { uid } = router.query

  return (
    <>
      <h3>Dashboard Component</h3>
      <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
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

export default withAuthUser()(Dashboard)