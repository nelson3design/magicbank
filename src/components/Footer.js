import React from "react";
import "../index.scss";
import logo2 from "../assets/logo-2.svg";
import store1 from "../assets/store-1.svg";
import store2 from "../assets/store-2.svg";




import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faShieldAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Container, Image, Col, Row } from "react-bootstrap";


const Footer = () => (
    <div className="bg-withe footer">
        <Container>
            <Row className="d-lg-flex justify-content-between align-items-center py-5">

                <Col lg={5} className="col-lg-5 d-flex d-lg-block justify-content-center py-3">
                    <Image src={logo2}/>

                </Col>
                <Col lg={5} className="d-flex justify-content-center py-3">
                    <div className="px-1 px-lg-3"><Image src={store1} /></div>
                    <div className="px-1 px-lg-3"><Image src={store2} /></div>
                </Col>
                <Col lg={2} className="d-flex justify-content-center py-3 social pr-lg-5">

                    <div className=""><a href="http://facebook.com/" target="blank" rel="noopener noreferrer"><FontAwesomeIcon className="" icon={faFacebookSquare} size="2x" /></a></div>

                    <div className="px-5"><a href="http://twitter.com/" target="blank" rel="noopener noreferrer"><FontAwesomeIcon className="" icon={faTwitter} size="2x" /></a></div>

                    <div className=""><a href="http://youtube.com/" target="blank" rel="noopener noreferrer"><FontAwesomeIcon className="" icon={faYoutube} size="2x" /></a></div>
                </Col>

            </Row>
        </Container>
    </div>

);

export default Footer;