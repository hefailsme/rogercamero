import React, { Component } from 'react';
import { Container, Row, Col, Mask, View, Button } from 'mdbreact';
import './PortfolioCard.css'

class PortCard extends Component {
  render() {
    return (
          <Container className="basehead">

            <Row>
              <Col className="blb"lg="6">
                  <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                    <h3 className="blue-text font-weight-bold mb-8 p-0"><strong>BRIGHT LIGHTS BASEMENT</strong></h3>
                    <p className="blbio">Bright Lights Basement is a MERN Stack App. The purpose of this app
                    is to act as the home base for a music & media studio out of Santa Ana, California.
                    </p><p className="blbio">The app also utilizes the following NPM packages:<br />
                    MDBReact, Axios, Body-Parser, and Font Awesome.</p><p className="blbio"> Because it was built with Bootstrap, Bright Lights Basement
                    is Mobile-Friendly App. MongoDB is used to store website data, which feeds the content to the app.  </p>
                   </View> 
              </Col>              
              <Col lg="6">
                  <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                    <img className="img img-fluid" src={require('../../assets/images/bl-home.png')} alt="home"/>
                    <a><Mask overlay="white-slight"/></a>
                  </View>
              </Col>
            </Row>

            <Row>
                <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                  <img className="img img-fluid" src={require('../../assets/images/bl-episodes.png')} alt="episodes"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
              <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                  <img className="img img-fluid" src={require('../../assets/images/bl-blog.png')} alt="blog"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                  <img className="img img-fluid" src={require('../../assets/images/bl-engineers.png')} alt="engineers"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
              <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-4" hover waves>
                  <img className="img img-fluid" src={require('../../assets/images/bl-footer.png')} alt="footer"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
            </Row>
            <Row> 
            <Col>
            <Button block href="https://blb-production.herokuapp.com/" target="_blank" rel="noopener noreferrer" onClick="https://blb-production.herokuapp.com/" active size="lg" color="blue" rounded>VISIT BRIGHT LIGHTS BASEMENT</Button>
            </Col>
            </Row>

            <hr className="blue my-5"/>

            <Row>
              <Col lg="6">
                <h3 className="blue-text font-weight-bold mb-8 p-0"><strong>HE FAILS ME</strong></h3>
                <p className="blbio">He Fails Me is a Sequelize Express Node JS app. Styled using CSS and Bootstrap,
                He Fails Me also utilizes a MySQL Database and JQuery. This app was built as a marketing tool for a musician
                who also works behind the scenes in audio production.</p><br /><p className="blbio"> This is a content heavy application
                that was built for desktop viewing. Users can navigate through the website to learn about the artist, stream their music 
                from the app, view tour dates as well as merchandise, and send a message to the artist. </p>
              </Col>
              <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/hfm-home.png')} alt="hfmhome"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
            </Row>
            <Row>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/hfm-news.png')} alt="hfmnews"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/hfm-about.png')} alt="hfmabout"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            </Row>
            <Row>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/hfm-media.png')} alt="hfmmedia"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/hfm-tour.png')} alt="hfmtour"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            </Row>
            <Row>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/hfm-store.png')} alt="hfmstore"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/hfm-contact.png')} alt="hfmcontact"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            </Row>
            <Row> 
            <Col>
            <Button block href="https://hefailsme.herokuapp.com/" target="_blank" rel="noopener noreferrer" onClick="https://hefailsme.herokuapp.com/" active size="lg" color="blue" rounded>VISIT HE FAILS ME</Button>
            </Col>
            </Row>
            <hr className="blue my-5"/>
            <Row>
              <Col lg="6">
                <h3 className="blue-text font-weight-bold mb-8 p-0"><strong>RNRD</strong></h3>
                <p className="blbio">RNRD is an interactive multimedia aggregate. This app was built using HTML,
                CSS, and JQuery. Additionally, this app was styled using Materialize UI and Google Font. <br /></p>
                <p className="blbio">Users can use this app to search for information regarding their favorite bands and artists.
                By using the API's for Ticketmaster, Youtube, and MusicMatch, the app user's query will return them current information
                regarding the artist their searched. This makes for a streamlined interactive music experience. </p>
              </Col>
              <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/rnrd-login.png')} alt="rnrdlogin"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
            </Row>
            <Row>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/rnrd-home1.png')} alt="rnrdhome1"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            <Col lg="6">
                <View className="rounded z-depth-2 mb-lg-5 mb-8" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/rnrd-home2.png')} alt="rnrdhome2"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
            </Col>
            </Row>
            <Row> 
            <Col>
            <Button block href="https://hefailsme.github.io/RNRD-Project/" target="_blank" rel="noopener noreferrer" onClick="https://hefailsme.github.io/RNRD-Project/" active size="lg" color="blue" rounded>VISIT RNRD</Button>
            </Col>
            </Row>
            <hr className="blue my-5"/>
          </Container>
    );
  }
}

export default PortCard;