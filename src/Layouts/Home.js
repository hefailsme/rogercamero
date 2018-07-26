import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HomeCard from '../components/HomeCard/HomeCard'
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
                <HomeCard />
                <Footer />               
            </div>
        )
    }   
}

export default Home