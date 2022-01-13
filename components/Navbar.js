import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link href='/' passHref>
          <Navbar.Brand>Dungeon Logger</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={'/About'} passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className='justify-content-end'>
          <Link href={'/login'} passHref>
            <Button>Login</Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}