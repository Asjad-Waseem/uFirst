import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import Sider from './Sider';
import './Layout.css';

function Content() {

    const collapsed = useSelector(state => state.collapsed.collapsed)

    return (
        <div className = "content">

            <NavBar />
            <Sider />

        <div className = {collapsed === true ? "page-content" : "page-content-open"}>

          <Container fluid>

              <Row>

                  <Col style = {{backgroundColor: "red"}}>
                  
                  <h1>sdasddsa</h1>
                  <p>asdsadsda</p>
                  
                  </Col>

                  <Col style = {{backgroundColor: "blue"}}>

                  <h1>sdasddsa</h1>
                  <p>asdsadsda</p>

                  </Col>

                  <Col style = {{backgroundColor: "red"}}>
                  
                  <h1>sdasddsa</h1>
                  <p>asdsadsda</p>

                  </Col>

                  <Col style = {{backgroundColor: "blue"}}>
                  
                  <h1>sdasddsa</h1>
                  <p>asdsadsda</p>

                  </Col>

              </Row>


          </Container>  
        
        </div>

        </div>
    
    );
}

export default Content;
