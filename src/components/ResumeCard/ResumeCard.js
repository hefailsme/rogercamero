import React, { Component } from 'react';
import { Container, Row, Col, Mask, View } from 'mdbreact';
import './ResumeCard.css'

class ResCard extends Component {
  render() {
    return (
          <Container className="basehead">

            <Row>
                   
              <Col lg="12">
                  <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                    <img className="img img-fluid" src={require('../../assets/images/Resume.jpg')} alt="resume"/>
                    <a><Mask overlay="white-slight"/></a>
                  </View>
              </Col>
            </Row>
            <Row>
                   
              <Col lg="12">
                  <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                    <img className="img img-fluid" src={require('../../assets/images/Resume2.jpg')} alt="resume"/>
                    <a><Mask overlay="white-slight"/></a>
                  </View>
              </Col>
            </Row>

          </Container>
    );
  }
}

export default ResCard;