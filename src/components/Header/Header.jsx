import React from 'react';
import { Link, NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaUserAlt} from 'react-icons/fa'
import logo from './images/logo1.png'
import './header.css'



const Header = () =>
{
  return (
    <Navbar
      sticky="top"
      fixed="top"
      expand="lg"
      style={{
        backgroundColor: "white",
        display:'flex',
        justifyCOntent:'center'
      }}
    >
      <Container style={{display:'flex', justyfyContent:'space-between'}}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "160px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'#8080ff'}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft: "5%"}}>
          <Nav className="me-auto" style={{gap:"15px" }} >
            <Nav.Link >
              <b component={NavLink} to="/" className='navitems' >
                Events
              </b>
            </Nav.Link>
            <Nav.Link >
              <b component={NavLink} to="/" className='navitems' >
                Community
              </b>
            </Nav.Link>
            
            <Nav.Link >
              <b component={NavLink} to="#" className='navitems' >
                Free Tutorials
              </b>
            </Nav.Link>
            <Nav.Link >
              <b component={NavLink} to="/" className='navitems' >
                Course
              </b>
            </Nav.Link>
          </Nav>
          
          <Nav>
              <Nav.Link >
              <Button
                component={NavLink}
                to="#"
                size='md'
               
                style={{borderRadius:25, width:'140px',backgroundColor:'rgb(110, 90, 230'}}
                className='accountbutton'
              >
                <span style={{display:'flex', justifyContent:'center', gap:5}}> < FaUserAlt size={19}/>My Account</span>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;