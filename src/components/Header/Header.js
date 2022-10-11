import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='big-blue' expand="md">  
            <Container>  
            <Navbar.Brand className='text-light' to="/">Navbar Brand</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="ms-auto menu">
                    <Link className='text-light active' to='/home'>Home</Link>
                    <Link className='text-light' to='/topics'>Topics</Link>
                    <Link className='text-light' to='/statistics'>Statistics</Link>
                    <Link className='text-light' to='/blog'>Blog</Link>
                </Nav>  
            </Navbar.Collapse>  
            </Container>  
        </Navbar>
    );
};

export default Header;