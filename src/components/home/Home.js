import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Heading from "../layout/Heading";
import Title from "../layout/Title";
import Bodytext from "../layout/Bodytext";

function Home(){
	
    return (
        <>
        <Row>
        <Row>
        <Col md={12} className="designheading"> 
        <Heading content="WEBSITE DESIGN STYLEGUIDE"/> 
        <Title content="Design and Branding Rules for DECOhome" /> 
        </Col>
       </Row>
        
         <Row>
        <Col md={12}>
        <Bodytext content= "Portfolio 2 Design 2 CA" /> 
        </Col>
       </Row>
       </Row>
        </>
    );
}

export default Home;



