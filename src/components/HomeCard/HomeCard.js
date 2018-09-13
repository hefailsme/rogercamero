import React, { Component } from 'react';
import { Container, Row, Col, Mask, View } from 'mdbreact';
import './HomeCard.css'

class HomeCard extends Component {
  render() {
    return (
          <Container>
            <Row>
                <Col lg="3">
                </Col>
              <Col className="home"lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                  <img className="img img-fluid" src={require('../../assets/images/morro.jpg')} alt="roger"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
                <Col lg="3">
                </Col>
                 
            </Row>
            <Row>
              <Col lg="12">

                  <h3 className="blue-text font-weight-bold mb-8 p-0"><strong>MY BACKGROUND</strong></h3>

                  <p className="background"> For the past 20 years, I've been an Audio Engineer and Musician.
                  In 1998, I started out as a musician playing in a touring punk band, and I also began producing and engineering albums.
                  In 2005, I shifted gears towards a focus on the "Behind The Scenes" aspect of the music industry.
                  I worked as a touring Front-of-House Live Sound Engineer, a Stage Manager, as well as a Tech. During my touring downtime, 
                  I stayed busy producing and engineering records in Southern California. In the Fall of 2016, I went on my last tour as a Sound Engineer,
                  and then retired from touring to begin my journey as a web developer.</p>

              </Col>
              </Row>
            <hr className="my-5"/>
            <Row>
              <Col lg="7">
                <h3 className="blue-text font-weight-bold mb-8 p-0"><strong>WEB DEVELOPMENT</strong></h3>
                <p className="web">I enrolled in the UCI Continuing Education Full-Stack 
                Web Development Bootcamp. Throughout the 6 month course, I immersed myself in learning
                the fundamentals of Web Development, quickly pushing myself to get up to speed with the newest, most 
                relevant technologies. By the end of the course, I was able to build a MERN Stack 
                Application by myself. While I've become a big fan of working with React JS, I've built apps with Vanilla Javascript, 
                JQuery, Node JS, MySQL and Sequelize. It's been an adventure going from learning basic HTML 5 and CSS 3,
                to combining all the skills I've learned in order to work with Mongo, Express, React and Node.</p>

 
              </Col>
              <Col lg="5">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/joshuatree.jpeg')} alt="rollie"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
            </Row>
            <hr className="my-5"/>
          </Container>
    );
  }
}

export default HomeCard;