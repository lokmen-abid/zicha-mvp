import React from "react"
import { Button, Navbar, Nav, NavDropdown , Form , FormControl} from 'react-bootstrap';
import Home from "./components/Home";


function App() {
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Naz Collection 2K20</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                    Link
                </Nav.Link>
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
    </Navbar>
    <Home />
        </div>
      );
}

export default App ;