import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
export default function Heading() {
    return (
        <>
            <Navbar color='dark' bg='dark'>
                <Container>
                    <Navbar.Brand href="/" style={{color:'white'}}>My Team</Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link to='/add' className='btn btn-primary'>Add User</Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
