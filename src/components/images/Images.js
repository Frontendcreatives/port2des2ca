import React from 'react';
import { Row, Col } from 'reactstrap';
import "../../sass/styles.scss";
import Heading from "../layout/Heading";



function Images(){
	
    return (

        <Row>  
        <Row>
        <Col md={12} className="designcolor">
        <Heading content="IMAGE RULES" />
        </Col>
        </Row>
   
      
        
        
         <Row>
        <Col md={12}>
        Optimization for webdesign and SEO according to following source: <a className="imagelink" href="https://www.jimdo.com/blog/optimize-website-images-for-better-design-seo/">GUIDELINES</a> 
        </Col>
        </Row>
    

               
      </Row>
            
    );
}

export default Images;



