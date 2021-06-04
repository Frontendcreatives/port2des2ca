import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Title from "../layout/Title";
import Heading from "../layout/Heading";



function Interactive(){
	
    return (

        <>  
        <Row id="menu">
        <Col md={12} className="designcolor" >
        <Heading content="INTERACTIVE FEATURES"/> 
        </Col>
        <Col md={12}>
        <Title content="MENU"/> 
        </Col>
        </Row>
        
      
        
        <Row>
        <Col md={12}>       
        <ul>Framework: React bootstrap menu, links redirecting to relevant page.</ul>
        <ul>Placement: top right corner</ul>
        <ul>Desktop: Float right menu item, links margin 50px.</ul>
        <ul>Mobile devices: Hamburger menu, menu 100% width, navitems on dropdown list,
        float left.</ul>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
        <Title content="IMAGE GALLERIES"/> 
        </Col>
        </Row>
        <Row>
        <Col md={12}>  
        <ul>Small photo gallery: Image slider and arrows for navigation.
        Expanded view on-click.</ul>
        <ul>Large photo gallery: Arrows for navigation, thumbnail photos bottom.
        Image slider expanded view on-click.</ul>
        </Col>
        </Row>
        
        <Row>
        <Col md={12}> 
        <Title content="NAVIGATION LINKS AND BUTTONS"/>
        </Col>
        </Row>
        
        <Row>
        <Col md={12}> 
        <p>Hover for color change.</p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
        <button className="hov"> BUTTON </button>
        </Col>
         </Row>
        <Row>
        <Col md={12}>
        <button className="link"> NAVIGATION </button>
        
        </Col>
        </Row>
<a href="#menu" className="menu"><h6> TOP ⇑</h6></a>            
      </>
            
    );
}

export default Interactive;


        
