import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <>
      <Navbar expand='md' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/#/about'>About</Nav.Link>
              <Nav.Link href='/#/menu'>Menu</Nav.Link>
              <Nav.Link href='/#/reservations'>Reservations</Nav.Link>
              <Nav.Link href='/#/order-online'>Order online</Nav.Link>
              <Nav.Link href='/#/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

// const Nav = ({}) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href='/home'>Home</a>
//         </li>
//         <li>
//           <a href='/about'>About</a>
//         </li>
//         <li>
//           <a href='/menu'>Menu</a>
//         </li>
//         <li>
//           <a href='/reservations'>Reservations</a>
//         </li>
//         <li>
//           <a href='/order-online'>Order online</a>
//         </li>
//         <li>
//           <a href='/login'>Login</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default Header;
