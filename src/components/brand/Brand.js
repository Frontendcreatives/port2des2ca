import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Bodytext from "../layout/Bodytext";
import Heading from "../layout/Heading";
import Title from "../layout/Title";
import Design1 from "../../images/Design1.png";
import Design2 from "../../images/Design2.png";
import Design3 from "../../images/Design3.png";




function Brand(){
	
    return (

        <> 
        
        <Row id="menu">
        <Col md={12} className="designcolor">
        <Heading content="BRAND ESSENCE" />
        </Col>
        <Col md={12}>
        <Title content="STORY"/> 
        <Bodytext   content="DECOhome is a company founded by artists who wants to bring
        luxurious and unique home decoration to their customers.
        Each item is handmade and the different products are made in
        limited numbers." />
        </Col>
        </Row>
     
        
        <Row>
        <Col md={12} >
        <Title content="VISION"/> 
        <Bodytext  content="Embellish customers home with handcrafted pieces of decorative
        art made with luxurious materials." />
        </Col>
        </Row>
        
        <Row>
        <Col md={12} >
        <Title content="VALUES"/> 
        <Bodytext  content="Modern, Clean, Elegant, Luxurious." />
        </Col>
        </Row>
        
        <Row>
        <Col md={12} >
        <Title content="IMAGES FOR INSPIRATION"/> 
        </Col>
        </Row>
        <Row>
        <Col md={12}>
            <img src={Design1} className="img-fluid" alt=" colorful art" />
        </Col>
        </Row>
        
        <Row>
        <Col md={6}>
            <img src={Design2} className="img-fluid" alt="ceramic cups" />
        </Col>
        <Col md={6}>
            <img src={Design3} className="img-fluid" alt="bust sculpture on gold background" />
          </Col>
        </Row>
        
        
        <Row>
        <Col md={12}>
        <Title content="VOICE OF COPY TEXT"/> 
        <Bodytext content="Professional, formal, informative." />
        </Col>
        </Row>   
       <a href="#menu" className="menu"><h6> TOP ⇑</h6></a>       
          
      </>
            
    );
}

export default Brand;

