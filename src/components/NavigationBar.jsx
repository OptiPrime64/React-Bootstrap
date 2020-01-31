import React from "react";
// import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { HashLink as Link} from 'react-router-hash-link';

const Styles = styled.div`
.navbar{
    background-color: #212e4c;
}

a, .navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover{
        color:white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="md" variant="dark">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link smooth to="/#sectionhome"> Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link smooth to="/about/#sectionabout"> About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link smooth to="/contact/#sectioncontact"> Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
)