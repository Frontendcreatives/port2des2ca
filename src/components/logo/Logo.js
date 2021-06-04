import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Title from "../layout/Title";
import Heading from "../layout/Heading";
import Bodytext from "../layout/Bodytext";
import Clearspace from "../../images/Clearspace.png";
import Imagesize from "../../images/Imagesize.png";
import Logodesktop from "../../images/Logodesktop.png";
import Logomobile from "../../images/Logomobile.png";
import Logolight from "../../images/Logolight.png";
import Logodark from "../../images/Logodark.png";




function Logo(){
	
    return (

        <>  
        <Row id="menu">
        <Col md={12} className="designcolor">
        <Heading content="LOGO"/>
        </Col>
        </Row>
        
        <Row>
        <Col md={6}>
        <Title content="SIZE"/>
         <img src={Imagesize} className="img-fluid" alt="logo size" />     
        </Col>
        <Col md={6}>
        <Title content="CLEAR SPACE"/>
        <img src={Clearspace} className="img-fluid" alt=" clear space" />
        <Bodytext  content="Minimum clear space. Logo centered. Width: 375px Height: 150px"/>
        </Col>
        </Row>
        
        <Row>
        <Col md={12}>
        <Title content="PLACEMENT"/> 
        </Col>
        </Row>
        <Row>
        <Col md={6}> <img src={Logodesktop} className="img-fluid" alt=" logo desktop layout" /> </Col>
        
        
        <Col md={6}>
        <Bodytext content=
        "Desktops to tablets:
        Top - left corner, header webpage
        Left for navigation, clear space rule."/>
        </Col>
        
        
      
        <Col md={6}> <img src={Logomobile} className="img-fluid" alt=" logo mobile layout" />  </Col>
        
        
         <Col md={6}>
        <Bodytext content=
        "Mobile screens:
        Top left, header webpage.
        Hamburger menu, top right, clear space rule."/>
         </Col>
        </Row>
        
        <Row>
        <Col md={12}>
        <Title content="COLOR VERSIONS AND COLOR COMBINATIONS"/> 
        </Col>
        </Row>
        
        <Row>
        <Col md={6}> <img src={Logodark} className="img-fluid" alt=" logo dark" /> </Col>
        <Col md={6}> 
        <div>
        <ul>Background color: HEX-000033</ul>
        <ul>Text color: HEX-F1EDE9</ul>
        <ul>Sign color: HEX-FBC981</ul>
        </div>
        </Col>
        </Row>
        
        <Row>
        <Col md={6}><img src={Logolight} className="img-fluid" alt=" logo light" /> </Col>
        <Col md={6}> 
        <div>
        <ul>Background color: HEX-FFFFFF</ul>
        <ul>Text color: HEX-000000</ul>
        <ul>Sign color: HEX-FBC981</ul>
        </div>
        </Col>
        </Row>

<a href="#menu" className="menu"><h6> TOP ⇑</h6></a> 
               
          
      </>
            
    );
}

export default Logo;
