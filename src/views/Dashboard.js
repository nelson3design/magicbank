import React, {useState} from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import {
   Switch, Route, Link
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle, faExclamation } from "@fortawesome/free-solid-svg-icons";
import AccountBalance from '../components/AccountBalance';
import AccountPayments from '../components/AccountPayments';
import AccountHistory from '../components/AccountHistory';


const Dashboard =({className=false, name, account}) => {
    
    const [activeLink, setActiveLink]=useState(0);
    
    const links = [
        {text:'Minha conta', path:'/dashboard', exact: true},
        { text: 'Pagamento', path: '/dashboard/payments'  },
        { text: 'Extrato', path: '/dashboard/history' }
    ];

    const data ={
        lastestbalance:[
        {date: '22/07', description: 'SAQUE 24H 012345', value:'300,00'},
        { date: '21/07', description: 'SUPERMERCADO 2312332', value: '275,90' },
        { date: '20/07', description: 'ESTACIONAMENTO 123234', value: '12,00' },
        { date: '15/07', description: 'PAGAMENTO ALUGUEL 123432', value: '1.500,00' },
              ],

        futurebalance:[
        { date: '22/07', description: 'SAQUE 24H 012345', value: '300,00',  },
        { date: '21/07', description: 'SUPERMERCADO 2312332', value: '275,90' },
        { date: '20/07', description: 'ESTACIONAMENTO 123234', value: '12,00' },
        ],

        extrato: [
            { date: '17/07', description: 'SAQUE 24H 012345', value: '200,00-' },

            { date: '17/07', description: 'SALDO DO DIA', saldo:'2.780,00' },

            { date: '19/07', description: 'ESTACIONAMENTO 123234', value: '12,00-' },

            { date: '19/07', description: 'COMPRA INTERNET 123432', value: '450,00-' },

            { date: '19/07', description: 'SALDO DO DIA', saldo: '2.318,00' },

            { date: '21/07', description: 'SUPERMERCADO 2312332', value: '275,90-'},

            { date: '21/07', description: 'ESTACIONAMENTO 123234', value: '12,00-' },

            { date: '21/07', description: 'SHOPPING 123432', value: '180,00-'},

            { date: '21/07', description: 'SALDO DO DIA', saldo: '1.851,00' },

            { date: '22/07', description: 'SUPERMERCADO 2312332', value: '275,90-' },

            { date: '22/07', description: 'DEPÓSITO 123234', value: '1.000,00' },

            { date: '22/07', description: 'SALDO DO DIA', saldo: '2.576,00' },
        ],
    
   };

    
       
   
     

   

    return(

       


        <Container className={`dashboard ${className ? className : ''}`}>
        <Row className="py-5">
            <Col xs={12} lg={4}>

                <Row className="align-items-center">
                    <Col xs={3} className="user">
                        <span className="user-avatar">
                            <FontAwesomeIcon className="icon1" icon={faCircle} color="#f8f9fa" size='5x'/>
                          
                            <FontAwesomeIcon className="icon2" icon={faUser} color="#7c7d7d" size='2x' />
                        </span>

                    </Col>
                    <Col xs={9}>
                        <h2>{name}</h2>
                        <p className="text-muted mb-0">{account}</p>
                    </Col>
                </Row>
                <Col className="mt-5 p-0">

                    {links.map(({text, path, exact}, key) =>(

                    <Link to={path} exact={exact ? exact : false} key={key}>
                            <Button 
                            className={`bouton text-left ${key === activeLink ? `active`: ''} `} 
                            variant="link"
                             size='lg'
                              block
                             onClick={() =>setActiveLink(key)}>
                           {text}
                        </Button>
                    </Link>
                    ))}

                    
                </Col>
            </Col>
            <Switch>

                    <Route path='/dashboard/history'>
                            <AccountHistory data={data} />

                    </Route>


                    <Route path='/dashboard/payments'>
                        <AccountPayments data={data} />

                    </Route>
                
                    <Route path='/dashboard'>
                     <AccountBalance data={data} />

                    </Route> 

                   
            </Switch>

           

           
        </Row>
    </Container>
       
    

)};

export default Dashboard;