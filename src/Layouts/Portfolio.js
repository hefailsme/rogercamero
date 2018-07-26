import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Portfolio from '../components/PortfolioCard/PortfolioCard'
import Footer from '../components/Footer/Footer'
import {Row} from 'mdbreact'


class Home extends React.Component {
    
    componentDidMount() {

    }

    render () {
        return (
            <div className="App">            
                <Row>
                <Navbar />
                </Row>
                <Portfolio />
                <Footer />               
            </div>
        )
    }   
}

export default Home