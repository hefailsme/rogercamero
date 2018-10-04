import React from 'react';
import { Row, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}


render() {

    return (
          <div>
          <Router>
              <Row>
            <Navbar color="black" dark expand="md" scrolling fixed="top">
            <NavbarBrand href="/home" onClick="/home">
                <h2> ROGER CAMERO </h2>
            </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick={ this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem>
                          <NavLink className="blue-text" to ="/home" onClick="/home">HOME</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="blue-text" to ="/portfolio" onClick="/portfolio">PORTFOLIO</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="blue-text" to ="/resume" onClick="/resume">RESUME</NavLink>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav right>
                        <NavItem>&nbsp;&nbsp;&nbsp;</NavItem>
                        <NavItem>                      
                            <a href="https://github.com/hefailsme" target="_blank" rel="noopener noreferrer"><Fa icon="github"/></a>
                        </NavItem>
                        <NavItem>&nbsp;&nbsp;&nbsp;</NavItem>
                        <NavItem>                         
                            <a href="https://www.linkedin.com/in/roger-camero-966014156/" target="_blank" rel="noopener noreferrer"><Fa icon="linkedin"/></a>
                        </NavItem>
                    </NavbarNav>
            </Collapse>
            </Navbar>
            </Row>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;