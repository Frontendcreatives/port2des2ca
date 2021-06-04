import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Title from "../layout/Title";
import Heading from "../layout/Heading";
import Colorpalette from "../../images/Colorpalette.png";

function Colors(){
	
    return (

        <>  
        <Row id="menu">
        <Col md={12} className="designcolor">
        <Heading content="COLOR PALETTE" />
        </Col>
        <Col md={12}><img src={Colorpalette} className="img-fluid" alt="Color palette" />
        </Col>
        </Row>
     
       
        
        <Row>
        <Col md={12}>
        <Title content="COLORS"/> 
        </Col>
        </Row>
        
        <Row>
        <Col md={12}>
        <div>
        <ul>Header: HEX000033</ul>
        <ul>Footer: HEX000033</ul>
        <ul>Navigation: HEX969694</ul>
        <ul>Buttons: HEX969694</ul>
        <ul>Box-shadow: 1px 1px 1px 1px HEXD0A86B</ul>
        <ul>Icons: HEX969694</ul>
        <ul>Image border: HEX475364</ul>
        <ul>Contact form / Textbox border: HEX475364</ul>
        <ul>Body: HEXFFFFFF</ul>
        <ul>Font colors referenced above.</ul>
        </div>
        </Col>
        </Row>

<a href="#menu" className="menu"><h6> TOP ⇑</h6></a> 
               
          
      </>
            
    );
}

export default Colors;
