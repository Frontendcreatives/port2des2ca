import React, { useState } from 'react';
import "../../sass/styles.scss"; 
import { Container } from "reactstrap";
import Brand from "../brand/Brand";
import Logo from "../logo/Logo";
import Typography from "../typography/Typography";
import Colors from "../colors/Colors";
import Icons from "../icons/Icons";
import Interactive from "../interactive/Interactive";
import Blayout from "../blayout/Blayout";
import Images from "../images/Images";
import { BrowserRouter as Router, Switch, Route } 
from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Footer from "./Footer";



const Layout = (props) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <Router>
      <Navbar color="light" light expand="md" className="designnav">
        <NavbarBrand className="logo">DECOhome</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/brand" exact className="nav">BRAND</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logo" className="nav">LOGO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/typography" className="nav">TYPOGRAPHY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/colors" className="nav">COLORS</NavLink>
            </NavItem>
             <NavItem>
              <NavLink href="/icons" className="nav">ICONS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/interactive" className="nav">INTERACTIVE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blayout" className="nav">LAYOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/images" className="nav">IMAGES</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
       <Container>
                <Switch>
                    <Route path="/brand" exact component={Brand} />
                    <Route path="/logo"  exact component={Logo} />
                    <Route path="/typography" exact component={Typography} />
                    <Route path="/colors" exact component={Colors} />
                    <Route path="/icons"  exact component={Icons} />
                    <Route path="/interactive" exact component={Interactive} />
                    <Route path="/blayout" exact component={Blayout} />
                    <Route path="/images" exact component={Images} />
                </Switch>
        </Container>
</Router>
  <Footer/>
     </> 
   
  );
}

export default Layout;

