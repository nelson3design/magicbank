import React from "react";
import {Row, Col, Jumbotron, Button, Image} from 'react-bootstrap';
import logoTel from "../assets/logo-M.png";
import logoDesktop from "../assets/logo-P.png";

import "../index.scss";


const Hero = ({ handleCreateAcc}) =>(
    <Jumbotron className="text-center text-light Hero">

        <Row className="justify-content-md-center my-lg-5">
            <Col lg className="text-lg-right my-lg-5">
               <Image className="d-lg-none" src={logoTel}/>
                <Image className="d-none d-lg-inline-block" src={logoDesktop} />
            </Col>

            <Col lg className="text-lg-left my-lg-5">
              <p>Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
            </Col>
        </Row>
       
       
    </Jumbotron>

);

export default Hero;