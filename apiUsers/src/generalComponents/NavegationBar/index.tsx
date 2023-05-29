import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState} from 'react'


export const NavegationBar = () => {

    const [activeLink, setActiveLink] = useState<string>(location.pathname);

    const changeActive = (): void => {

        setActiveLink(location.pathname)
    }

    return (<>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Users API Client Side</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" onClick={changeActive} className={activeLink == '/' ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link href="/user/" onClick={changeActive} className={activeLink == '/user/' ? 'active' : ''}>Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)

}