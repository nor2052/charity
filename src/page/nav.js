import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo1 from '../assets/images/logo1.png';

function Navbarr() {
  return (
  <Navbar className="bg-body-tertiary justify-content-between">
  <Container fluid>
    <Navbar.Brand href="/" className='AppTitle'>الخير</Navbar.Brand>
    <Nav.Link href='//' className='greenItem'>عن ثواب الصدقة</Nav.Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <Form inline className="d-flex">
        </Form>
        <Form inline className="d-flex">
          <Nav.Link href="/Free">فرجت</Nav.Link>
          <Nav.Link href="/Easy" >تيسرت</Nav.Link>
          <Nav.Link href="/help">إغاثة ملهوف</Nav.Link>
          <Nav.Link href="/">الصفحة الرئيسية</Nav.Link>
          <NavDropdown title="تسجيل الدخول" id="navbarScrollingDropdown" className='ScrollingDropdown'>
            <NavDropdown.Item href="#action3" className='ScrollingDropdown'>إنشاء حساب جديد</NavDropdown.Item>
            <NavDropdown.Item href="#action4" className='ScrollingDropdown'>
              التعليقات
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5" className='ScrollingDropdown'>
              الإدارة
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='/'> <img className='logo' src={logo1} alt="Logo1" /> </Nav.Link>
        </Form>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


  );
}

export default Navbarr;




{/* <nav className="navbar nav navbar-expand-lg navbar-light bg-light">
        <Link className='navbar-brand' to='/'>
            <img src={Name} alt="Name" height={50} />
        </Link>
        <Link className='navbar-brand' to='/'>
            <img src={shopping} alt="shopping" height={50} />
        </Link>
        <Link className="navbar-brand greenItem" to="">عن ثواب الصدقة</Link>
        <Link className="navbar-brand" to="">فرجت</Link>
        <Link className="navbar-brand" to="/Easy">تيسرت</Link>
        <Link className="navbar-brand" to="/Project">المشاريع</Link>
        <Link className="navbar-brand active" to="/Main">الصفحة الرئيسية</Link>
        <Link className='navbar-brand' to='/'>
            <img src={logo} alt="Logo" height={60} />
        </Link>
    </nav> */}










        // <Navbar className="bg-body-tertiary justify-content-between navb"  >
    // <Container fluid >
    //  <Navbar.Toggle aria-controls="navbarScroll" />
    //    <Navbar.Collapse id="navbarScroll">
    //      <Nav
    //        className="me-auto my-2 my-lg-0"
    //        style={{ maxHeight: '100px' }}
    //        navbarScroll
    //      >
    //   <Form inline>
    //   <Nav.Link href='/'> <img className='logo' src={logo1} alt="Logo1"  /> </Nav.Link>
    //   <Nav.Link href='/'> <img src={shopping} alt="shopping" height={50} /> </Nav.Link>
    //   </Form>
    //   <Form inline>
    //       <Nav.Link href='//' className='greenItem'>عن ثواب الصدقة</Nav.Link>
    //       <Nav.Link href="//">فرجت</Nav.Link>
    //       <Nav.Link href="#action2">تيسرت</Nav.Link>
    //       <Nav.Link href="#action2">المشاريع</Nav.Link>
    //       <Nav.Link href="#action2">الصفحة الرئيسية</Nav.Link>
    //       <NavDropdown title="تسجيل الدخول" id="navbarScrollingDropdown" className='ScrollingDropdown'>
    //          <NavDropdown.Item href="#action3" className='ScrollingDropdown'>إنشاء حساب جديد</NavDropdown.Item>
    //          <NavDropdown.Item href="#action4" className='ScrollingDropdown'>
    //          التعليقات
    //          </NavDropdown.Item>
    //          <NavDropdown.Divider />
    //          <NavDropdown.Item href="#action5" className='ScrollingDropdown'>
    //            الإدارة
    //          </NavDropdown.Item>
    //       </NavDropdown>
    //       </Form>
    //     </Nav>
    //     <Navbar.Brand href="#" className='AppTitle'>الخير</Navbar.Brand>
    //     </Navbar.Collapse>
    //     </Container>
    // </Navbar>