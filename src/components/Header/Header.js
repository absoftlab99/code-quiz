import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { NavLink, Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    
    return (
        <Navbar className='big-blue sticky fixed-top' expand="md">  
            <Container>  
            <Navbar.Brand className='text-light fw-bolder' as={Link} to="/"><FontAwesomeIcon className='text-warning fw-bolder' icon={faCode}></FontAwesomeIcon> Code Quiz</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="ms-auto menu">
                    <NavLink activeClassName="active" className='text-light' to='/home'>Home</NavLink>
                    <NavLink activeClassName="active" className='text-light' to='/topics'>Topics</NavLink>
                    <NavLink activeClassName="active" className='text-light' to='/statistics'>Statistics</NavLink>
                    <NavLink activeClassName="active" className='text-light' to='/blog'>Blog</NavLink>
                </Nav>  
            </Navbar.Collapse>  
            </Container>  
        </Navbar>
    );
};

export default Header;