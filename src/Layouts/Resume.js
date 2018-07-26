import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Resume from '../components/ResumeCard/ResumeCard'
import Footer from '../components/Footer/Footer'
import {Row} from 'mdbreact'


class Res extends React.Component {
    
    componentDidMount() {

    }

    render () {
        return (
            <div className="App">            
                <Row>
                <Navbar />
                </Row>
                <Resume />
                <Footer />               
            </div>
        )
    }   
}

export default Res