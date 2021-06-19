import React from "react";
import "../index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMobile, faShoppingCart, faWallet} from "@fortawesome/free-solid-svg-icons";

import {Image} from "react-bootstrap";
import cartao from "../assets/credit-card.jpg";





const Itens = () => (
    <div className="container">
        <div className="row py-lg-5">

            <div lg className="col justify-content-end mt-lg-3">
                <h2 className="color-text">Cartão de crédito</h2>

               

                <div className="row  pt-4 px-2">
                    
                    <div className="pr-lg-4 h4 font-weight-normal">
                        <div className="display-5"><FontAwesomeIcon className="text-danger mx-2" icon={faCreditCard} />
                            Crédito pessoal</div>

                        <div className="my-4"> <FontAwesomeIcon className="text-danger mx-2" icon={faMobile} />
                        APP</div>
                      
                    </div>

                    <div className="pl-lg-5 h4 font-weight-normal">
                        <div > <FontAwesomeIcon className="text-danger mx-2" icon={faShoppingCart} />
                            Pagmento online</div>

                        <div className="my-4"> <FontAwesomeIcon className="text-danger mx-2" icon={faWallet} />
                        Carteira digital</div>
                    </div>

                </div>

             </div>


               
                
           

            <div lg className="img-cart">
                <Image src={cartao}/>
            </div>

        </div>



    

       

       

    </div>

);

export default Itens;