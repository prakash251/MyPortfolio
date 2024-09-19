import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//Assets
import '../style/footer.css'
import logo from '../assets/img/logo.jpg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row className='align-items-center'>
                        <Col sm={3} className='logoContainerFooter'>
                            <img className='logo' src={logo} alt="logo" />
                        </Col>
                        <Col sm={6} className='text-Sacramento d-flex justify-content-center'>
                            <h2>Omprakash <span className='lastName'>Gutta</span></h2>
                        </Col>
                        <Col sm={3} className='text-center text-sm-end'>
                            <div className="social-icon">
                            <a href="https://www.linkedin.com/in/omprakash-gutta-88799822a/" target="__blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/prakash251" target="__blank"><img src={navIcon2} alt="" /></a>
                            </div>
                            <p>No &#169; copyright issues.Feel free to copy. If any issues, ping me !</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
