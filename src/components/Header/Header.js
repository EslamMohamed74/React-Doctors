import React,{useState,useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { notifications } from '../../data/notifications'
import './Header.css'
const Header = () => {
    const [notifCart,setNotifCart] = useState([])
    useEffect(()=>{
        const notifCarts = notifications.map(notification => {
            return (
                <span key={notification.id}>
                <NavDropdown.Item href={notification.id}>
                    <p className="d-inline-block NavDropdown-Title">{notification.title} <small className="NavDropdown-SubTitle">{notification.time}</small></p>
                    <small className="d-block NavDropdown-Body">{notification.body}</small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                </span>
            )
        })
        setNotifCart(notifCarts)
    },[])
    return (
        <Navbar collapseOnSelect expand="md" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-0 mr-md-auto text-right">
                        <Nav.Link href="#home">الرئيسية&nbsp;<i className="fas fa-chevron-down fa-sm"></i></Nav.Link>
                        <Nav.Link href="#about">عن المستشفى&nbsp;<i className="fas fa-chevron-down fa-sm"></i></Nav.Link>
                        <Nav.Link href="#sent" className="active">ارسال طلب&nbsp;<i className="fas fa-chevron-down fa-sm"></i></Nav.Link>
                        <Nav.Link href="#prescriptions">الوصفات الطبية&nbsp;<i className="fas fa-chevron-down fa-sm"></i></Nav.Link>
                        <Nav.Link href="#mywallet">محفظتي&nbsp;<i className="fas fa-chevron-down fa-sm"></i></Nav.Link>
                        <Nav.Link href="#contactus">تواصل معنا&nbsp;<i className="fas fa-chevron-down fa-sm"></i></Nav.Link>
                        <NavDropdown title={
                            <i className="icon far fa-bell"></i>
                        } id="collasible-nav-dropdown">
                            <div id="up_arrow"></div>
                            {notifCart}
                        </NavDropdown>
                        <Nav.Link href="#profile" className="icon"><i className="far fa-user-circle"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;
