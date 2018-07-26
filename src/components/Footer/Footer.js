import React from 'react';
import { Footer, Col, Container, Row, Button} from 'mdbreact';
import './Footer.css'

const Foot = () => (
            <Footer  color="black" className="page-footer font-small pt-0">
                <div className="black">
                    <Container className="text-left">
                        <Row className="py-4 d-flex align-items-center">
                            <Col sm="12" className="blue-text text-center text-md-center mb-2 mb-md-0">
                           <h4> CONTACT ROGER CAMERO</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase text-center font-weight-bold"><strong>TECHNICAL RESUME</strong></h6>
                            <hr className="blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <p className="text-uppercase text-center font-weight-bold"> CLICK BUTTON TO VIEW RESUME </p>
                            <Button block href="/resume" onClick="/resume" active size="sm" color="blue" rounded>RESUME</Button>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase text-center font-weight-bold"><strong>CODING PROJECT LINKS</strong></h6>
                            <hr className="blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <a className="text-uppercase text-center font-weight-bold" href="https://blb-production.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-eye mr-3"></i>BRIGHT LIGHTS BASEMENT</p></a>
                            <a className="text-uppercase text-center font-weight-bold" href="https://hefailsme.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-eye mr-3"></i> HE FAILS ME </p></a>
                            <a className="text-uppercase text-center font-weight-bold" href="https://hefailsme.github.io/RNRD-Project/" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-eye mr-3"></i> RNRD </p></a>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase text-center font-weight-bold"><strong>MUSIC PRODUCTION LINKS</strong></h6>
                            <hr className="blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <a className="text-uppercase text-center font-weight-bold" href="https://open.spotify.com/user/hefailsme/playlist/35KhQ3ljd64WeZqSP6wlVR?si=iFxpSbczT3Ocpo67qHyxtw" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-spotify mr-3"></i> SPOTIFY AUDIO RESUME </p></a>
                            <a className="text-uppercase text-center font-weight-bold" href="https://www.allmusic.com/artist/roger-camero-mn0000954856" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-music mr-3"></i>ALLMUSIC DISCOGRAPHY</p></a>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase text-center font-weight-bold"><strong>CONTACT</strong></h6>
                            <hr className="blue accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <a className="text-uppercase text-center font-weight-bold"href="mailto:rogercamero@icloud.com"><p><i className="fa fa-envelope mr-3"></i> rogercamero@icloud.com</p></a>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container className="white-text" fluid>
                       <a className="white-text">  &copy; {(new Date().getFullYear())} Copyright: </a> <a className="white-text">Roger Camero</a>
                    </Container>
                </div>
            </Footer>
        )

export default Foot

