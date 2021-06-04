import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Title from "../layout/Title";
import Heading from "../layout/Heading";
import Desktoplayout from "../../images/Desktoplayout.png";
import Mobilelayout from "../../images/Mobilelayout.png";


function Blayout(){
	
    return (

        <>  
        <Row id="menu">
        <Col md={12} className="designcolor">  
        <Heading content="LAYOUT"/> 
        </Col>
        </Row>
    
         <Row>
        <Col md={12}>
        <Title content="BOOTSTRAP GRID LAYOUT SYSTEM"/> 
        </Col>
        </Row>
        
        
        
        <Row>
        <Col md={12}>
        <Title content="DESKTOP LAYOUT EXAMPLE"/> 
        </Col>
        <Col md={12}> 
        <p>Breakpoint at MD, devices > 768px.</p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
       <img src={Desktoplayout} className="img-fluid" alt="Icon rules" /> 
        </Col>
        </Row>
        <Row>
        <Col md={12}>
        <Title content="MOBILE LAYOUT EXAMPLE"/> 
        </Col>
        <Col md={12}> 
        <p>Stacking left to right</p>
        </Col>
        </Row>
       <Row>
        <Col md={12}>
        <img src={Mobilelayout} className="img-fluid" alt="Icon rules" /> 
        </Col>
        </Row>

<a href="#menu" className="menu"><h6> TOP ⇑</h6></a> 
               
      </>
            
    );
}

export default Blayout;
