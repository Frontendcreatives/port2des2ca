import React from 'react';
import { Row, Col, Card, Button } from 'reactstrap';
import "../../sass/styles.scss";
import Title from "../layout/Title";
import Heading from "../layout/Heading";



function Typography(){
	
    return (

        <>  
        <Row id="menu">
        <Col md={12} className="designcolor">
        <Heading content= "TYPOGRAPHY" />
        </Col> 
        <Col md={12}>
        <Title content="FONTNAME, SIZES AND COLORS"/> 
        </Col>
        </Row>
       
       
        <Row>
        <Col md={12}> 
        <Card fluid="true" className="fonts" >
        <h1> MONTSERRAT</h1>
        <h1>H1, UPPERCASE, HEX000033 </h1>
        <h2>H2, UPPERCASE, HEX475364 </h2>
        <h3>H3, Lowercase, HEX475364 </h3>
        <h4>H4, Lowercase, HEX475364 </h4>
        <p> ROBOTO </p>
        <p>Bodytext, 16px, font-weight 100, Letter-spacing 1px, HEX000033</p>
        </Card>
        </Col>
        </Row>
        
        <Row>
        <Col md={12}>
        <Title content="NAVIGATION"/> 
        </Col>
        </Row>
        <Row>
        <Col md={6} >
        <p className="designp"> SHOWROOM LOCATIONS CONTACT</p>
        </Col>
        <Col md={6}>
        <p>Montserrat, Uppercase, 18px, HEXFBC981, HEX000033 on Background.</p>
        </Col>
        </Row>
        
        <Row>
        <Col md={12}>
        <Title content="BUTTONS"/> 
        </Col>
        </Row>
        <Row>
        <Col md={6}>
        <Button className="btn"> BUTTON </Button>
        </Col>
        <Col md={6}>
        <p>Montserrat, Uppercase, 18px, HEX000033, HEXFBC981 on Background.</p>
        </Col>
        </Row>
        
        
        
        <Row>
         <Col md={6}>
        <Button className="hover"> HOVER </Button>
        </Col>
        <Col md={6}>
        <p>Montserrat, Uppercase, 18px,HEXFFFFFF, HEX475364 on Background.</p>
        </Col>
        </Row>
        
        <Row>
        <Col md={6}>
        <p className="designp"> Footer Text </p>
        </Col>
        <Col md={6}>
        <p>Montserrat, 16px, HEXFBC981, HEX000033 on Background.</p>
        </Col>
        </Row>
        
        <Row>
        <Col md={6}>
        <p className="quotes"> Block quotes and testimonials </p>
        </Col>
        <Col md={6}>
        <p>Montserrat, 16px, italic, HEX475364</p>
        </Col>
        </Row>

<a href="#menu" className="menu"><h6> TOP ⇑</h6></a> 
               
      </>    
      
            
    );
}

export default Typography;

