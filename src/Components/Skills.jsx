import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

//Assets
import '../style/skills.css'
import techImg from '../assets/techStack/techStack-1.gif'


export default function Skills() {
    return (
        <>
            <section id="home">
                <Container>
                    <Row>
                        <Col className='centerItems imgColumn'>
                            <div className='techImg'>
                                <img src={techImg} alt="techstackimage" />
                            </div>
                        </Col>
                        <Col className='centerItems'>
                            <h2 className='techTitle'>Tech Stack :</h2>
                            <div className="stackContainer">
                                <div className="languages">
                                    <h5 className='stackTitles'>Languages :</h5>
                                    <div className="languageContainer techContainer">
                                    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                                     <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                     <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" alt="" />
                                    </div>
                                </div>
                                <div className="framework">
                                    <h5 className='stackTitles'>Java Framework/Library :</h5>
                                    <div className="frameworkContainer techContainer">
                                    <img src="https://img.shields.io/badge/springboot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/springmvc-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="Spring MVC" />
    <img src="https://img.shields.io/badge/hibernate-%234593D1.svg?style=for-the-badge&logo=hibernate&logoColor=white" alt="Hibernate" />
    <img src="https://img.shields.io/badge/JPA-%236DB33F.svg?style=for-the-badge&logo=java&logoColor=white" alt="JPA" />
                                    </div>
                                </div>
                                <div className="cssFramework">
                                    <h5 className='stackTitles'>CSS Framework/Library:</h5>
                                    <div className="cssFrameworkContainer techContainer">
                                        
                                        <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
                                    </div>
                                </div>
                                <div className="database">
                                    <h5 className='stackTitles'>Database :</h5>
                                    <div className="databaseContainer techContainer">
                                    <img src="https://img.shields.io/badge/mysql-%234ea94b.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                                    <img src="https://img.shields.io/badge/oracle-F80000.svg?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle" />
                                        <div/>
                                </div>
                                
                                <div className="versionControl">
                                    <h5 className='stackTitles'>Vesion Control :</h5>
                                    <div className="versionControlContainer techContainer">
                                        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="" />
                                        <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />
                                        <img src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
