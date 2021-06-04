import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Title from "../layout/Title";
import Heading from "../layout/Heading";
import Icon from "../../images/Icon.png";
import Iconrules from "../../images/Iconrules.png";

function Icons(){
	
    return (

        <>  
        <Row id="menu">
        <Col md={12} className="designcolor">  
        <Heading content="ICON DESIGN RULES"/> 
        </Col>
        </Row>
        
        <Row>
        <Col md={12}>
        <Title content="ILLUSTRATION EXAMPLES HOME AND SEARCH ICONS"/> 
        </Col>
        </Row>
        <Row>
        <Col md={6}>
        <img src={Icon} className="img-fluid" alt="Icons" /> 
         </Col>
        <Col md={6}>
        <div>
        <ul>Design type: Outline</ul>
        <ul>Style: Abstract</ul>
        <ul>Simple design: Max 2-3 objects, optimized for smaller screens</ul>
        <ul>Color: HEX969694</ul>
        <ul>Background color: HEX000033 / HEXFFFFFF</ul>
        <ul>Perspective: 2D</ul>
        </div>
        </Col>
        </Row>
        
        <Row>
        <Col md={12}> 
        <Title content="DRAWING THE ICONS"/> 
        </Col>
        </Row>
        
        <Row>
        <Col md={6}>
        <img src={Iconrules} className="img-fluid" alt="Icon rules" /> 
        
        </Col>
        
        <Col md={6}>
        <p>
        Image and grid design rules taken from https: digitalsynopsis.com/design/ui-icon-design-rules/
        </p>
        </Col>
        </Row>
<a href="#menu" className="menu"><h6> TOP ⇑</h6></a>            
      </>
            
    );
}

export default Icons;

