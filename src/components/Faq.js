import React from "react";

import "../index.scss";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faShieldAlt, faUserTie, faWallet } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";


const Duvidas = () => (
    <div className="fundo-2 py-5">
        <Container>
            <div>
                <div className="text-center pt-5">
                    <h3>Dúvidas frequentes</h3>
                </div>

                <div className="d-lg-flex align-items-center py-5">

                    <div className=" col-lg-5 d-lg-flex">

                        <div className=" d-flex justify-content-between d-lg-block">
                            <div className="py-lg-3"><FontAwesomeIcon className="text-white" icon={faCreditCard} size="2x" /></div>

                            <div className="py-lg-3"><FontAwesomeIcon className="text-white" icon={faWallet} size="2x" /></div>

                            <div className="py-lg-3"><FontAwesomeIcon className="text-white" icon={faShieldAlt} size="2x" /></div>

                            <div className="py-lg-3"><FontAwesomeIcon className="text-white" icon={faUserTie} size="2x" /></div>

                            
                        </div>

                        <div className="col mb-3">
                            <div className="col py-lg-3 pt-5 pb-4 py-lg-0 active-center"><span className="active">Cartão de crédito e débito</span> </div>

                            <div className="col py-lg-4 d-none d-lg-block"><span>Conta e abertura</span>  </div>
                            <div className="col py-lg-3 d-none d-lg-block"><span>Token digital</span>  </div>
                            <div className="col py-lg-4 d-none d-lg-block"><span>Produtos e serviços</span>  </div>
                        </div>

                      
                    </div>



                    <div className=" col-lg-7 px-0 quadro rounded">
                        
                        <div className="quadro-1">
                            <h4 className="p-3 rounded-top">Lorem ipsum dolor sit amet</h4>
                       </div>

                        <div className=" p-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper,
                                 varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit.
                                  Curabitur scelerisque placerat ultrices.
                                 Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </p>
                        </div>

                        <div className="p-3 rounded-bottom quadro-2">
                            <h5 className=" pt-2">Nulla porttitor eros ac ex tristique posuere</h5>
                            <h5 className=" py-3">Quisque fringilla tincidunt arcu</h5>
                            <h5 className=" pb-2">Nam elementum lobortis purus a maximus tortor</h5>
                        </div>

                    </div>
                </div>


            </div>
        </Container>
    </div>
);


export default Duvidas;