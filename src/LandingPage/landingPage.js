import './landingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import landingPageImage from '../img/Landing-page-image.svg';
import {Container, Image, Row, Col, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

function LandingPage(){
    return (
        <Container>
            <Row>
                <Col xs={12} md={12} lg={6} className='LandingPage-heading'>
                    <p>Imagine if <br/><span>snapchat</span><br/> had events</p>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={6} className='LandingPage-eventHostText'>
                    <p>Easily host and share events with your friends across any social media.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 6, offset: 3}} md={{span: 6, offset: 3}} lg={{span:6, order: "first"}} className='LandingPage-image'>
                    <Image fluid="true" src={landingPageImage} alt="landingPageImage"/>
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 6, offset: 3}} md={{span: 6, offset: 3}} lg={6} className='LandingPage-button'>
                    <Link to="event"><Button variant="light" size="lg">🎉 Create my event</Button></Link>
                </Col>
            </Row>
        </Container>
    );
}

export default LandingPage;