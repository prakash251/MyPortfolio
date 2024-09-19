import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//Assets
import '../style/animationBox.css'

export default function AnimationBox() {
    const [animation, setAnimation] = useState("cube");
    const [stageAnimation, setStageAnimation] = useState("");

    const handleClick = () => {
        if (animation === "cube") {
            setAnimation("ring")
            setStageAnimation("translateZ(-200px)");
        } else {
            setAnimation("cube")
            setStageAnimation("");
        }
    }

    return (
        <>
            <hr />
            <section id='cubeAnimation' className="cubeAnimation">
                <Container>
                    <Row>
                        <Col sm={12} className="d-flex justify-content-center">
                            <div id="container">
                                <div id="stage" style={{transform : `${stageAnimation}`}}>
                                    <div id="shape" className={`${animation} backfaces`}>
                                        <div className="plane one">O</div>
                                        <div className="plane two">M</div>
                                        <div className="plane three">P</div>
                                        <div className="plane four">R</div>
                                        <div className="plane five">A</div>
                                        <div className="plane six">K</div>
                                        <div className="plane seven">A</div>
                                        <div className="plane eight">S</div>
                                        <div className="plane nine">H</div>
                                        <div className="plane ten">G</div>
                                        <div className="plane eleven">U</div>
                                        <div className="plane twelve">T</div>
                                        <div className="plane twelve">T</div>
                                        <div className="plane twelve">A</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} className="d-flex justify-content-center">
                            <button className='cubeBtn' onClick={handleClick} >Click me </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
