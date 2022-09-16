import React from "react";
import "./home.css";
import "./css/home.css";
import photo from "./images/photo2.webp";
import email from "./images/mail-u.gif";
import conn from "./images/conn.gif";
import { Card } from "reactstrap";
import Testomonial from "./Testomonial";


import welcome from "./images/wl.gif";
import join from './images/join.webp'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Home = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <Row>
            <Col md={6} style={{paddingTop:'10%'}}>
              <h1 className="heading" style={{paddingBottom:"20px"}}> ConnexLearnHeading</h1>
              <p style={{color:'black'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis at ipsa delectus aliquid quidem molestias excepturi
                magnam necessitatibus sunt voluptatum facere fuga, earum nam
                at ipsa delectus aliquid quidem moles
                modi nostrum dolores? Animi, at ipsa delectus aliquid quidem moles libero dignissimos!
              </p>
              <img src={welcome} alt="" className="wel" />
            </Col>
            <Col md={6}>
              <img src={photo} alt="" className="float-end" />
              <img src={conn} alt="" className="absolute conn mt-64" />
              <img src={email} alt="" className="mail absolute" />
            </Col>
          </Row>

          <Row>
            <Col md-6>
              <h1 className="heading1" style={{paddingTop:"30px", display:'flex', justifyContent:'center'}}><span style={{color:'black', paddingRight:'10px'}}>Our</span> Services</h1>
              <p style={{color:'black', display:'flex', justifyContent:'center', paddingTop:'10px', fontSize:'20px'}}>
                Here's what we offer
              </p>
            
            <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                <Card style={{color:'black' ,height:'100px' , marginBottom:'20px'}}>
                <div style={{ display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                  <h3 style={{paddingTop:'15px'}}>Tutorials</h3>
                  <h4>22</h4>
                </div>
                
              </Card>
              <Card style={{color:'black' ,height:'100px', marginBottom:'20px'}}>
                <div style={{ display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                    <h3 style={{paddingTop:'15px'}}> Events</h3>
                    <h4>22</h4>
                </div>
              </Card>
            
                <Card style={{color:'black' ,height:'100px', marginBottom:'20px'}}>
                <div style={{ display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                  <h3 style={{paddingTop:'15px'}}>Courses</h3>
                  <h4>22</h4>
                </div>
              </Card>              
            </div>
            </Col>
          </Row>
        
        <Row>
          <Col md-6>
            <h1 className="heading1" style={{paddingTop:"30px", display:'flex', justifyContent:'center'}}><span style={{color:'black', paddingRight:'10px'}}>Our</span>Products</h1>
              <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                <Card style={{color:'black' ,height:'100px' , marginBottom:'20px'}}>
                  <div style={{ display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                    <h3 style={{paddingTop:'15px'}}>product1</h3>
                    <h4>22</h4>
                  </div>
                
              </Card>
              <Card style={{color:'black' ,height:'100px', marginBottom:'20px'}}>
                <div style={{ display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                    <h3 style={{paddingTop:'15px'}}>Product 2</h3>
                    <h4>blahh blahh blahh</h4>
                </div>
              </Card>            
            </div>
          
          </Col>
        </Row>

        <Row>
          <Col md-6>
            <h1 className="heading1" style={{paddingTop:"30px", display:'flex', justifyContent:'center'}}><span style={{color:'black', paddingRight:'10px'}}>Blog</span>(Tech Solution)</h1>
            <p style={{color:'black', display:'flex', justifyContent:'center', paddingTop:'10px', fontSize:'20px'}}>
                Add Blog post and also add Blog Suscriber 
              </p>
          </Col>
        </Row>


      {/* testomonials */}

      < Testomonial />
        

          
          {/* join us */}
          <div className="row my-5" style={{marginTop:'3px'}}>
          <div className="col-md-4 col-12">
            <div className="text-black fw-bold joinst">
              <h1 className="fw-bolder" style={{display:'flex', justifyContent:'center'}}>Join Our Team</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam velit rem ipsa deleniti hic?</p>
              <div style={{display:'flex', justifyContent:'center'}}>
                <button className="join-btn">Learn More</button>
              </div>
            </div>
            </div>
            <div className="col-md-8 col-12">
              <img src={join} alt="" className="join" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
