import React from "react";
import "../index.scss";
import { Button, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMobile, faMobileAlt, faGlobe, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

import { Image } from "react-bootstrap";

const Institutional = ({ handleCreateAcc}) =>(

    <div className="fundo">

        <Container>

            <div className="row row-col-2">

          
                <div className="col-lg-7 offset-lg-5 pt-5">
        <h2>já nascemos digital</h2>
                    <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper,
             varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit.
             Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci,
              fringilla eget fermentum nec, dignissim nec diam.</p>

           <div className="row mb-3">
                        <div className="col-0 ml-3"><FontAwesomeIcon className="text-white" icon={faMobileAlt} /></div>

                        <div className="col-9">Sem fila e sem burocracia  </div>
           </div>

                    <div className="row mb-3">
                        <div className="col-0 ml-3"><FontAwesomeIcon className="text-white" icon={faMobile} /></div>

                        <div className="col-9"> Simples e prático </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-0 ml-3"><FontAwesomeIcon className="text-white" icon={faGlobe} /></div>

                        <div className="col-9">Abertura de conta 100% online  </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-0 ml-3"><FontAwesomeIcon className="text-white" icon={faShieldAlt} /></div>

                        <div className="col-9">Transações mais seguras  </div>
                    </div>
                    
                     
                 




        <div className="mt-4 mb-5">

                        <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
        </div>

            </div>

            </div>

        </Container>
          

        
    </div>

);

export default Institutional;