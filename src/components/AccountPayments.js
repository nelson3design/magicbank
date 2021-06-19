import React from 'react';
import { Button, Col, Tabs, Table, Tab, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountPayments = () => (
   
    
        <>
           

            <Col xs={12} lg={8} className='mt-4 mt-lg-5 pt-lg-5'>
                <h3 className='mb-5'>Pagamentos</h3>
                <Tabs  defaultActiveKey="boleto" className=' mt-lg-5'>
                    <Tab eventKey="boleto" title="Boleto">
                    <Form variant="light" className='boleto pl-lg-4'>
                        <Form.Group controlId="formBasicNumber" className='mt-4'>

                            <Form.Label >Código de barras</Form.Label>
                            <Form.Control type="text" placeholder="Insira o código de barras" />
                        </Form.Group>

                        <Form.Group controlId="formBasicNumber" className='mt-4'>

                            <Form.Label>Forma de pagamento</Form.Label>
                            <div className='d-flex' >

                                <Form.Check className='pr-4'
                                type='radio'
                                id='debito'
                                label='Débito em conta corrente'
                                name='check'
                                checked
                            />

                            <Form.Check 
                                type='radio'
                                id='debito'
                                label='Cartão de crédito'
                                name='check'
                            />
                            </div>
                        </Form.Group>
                        <Button variant="success" className='my-4'>Continuar</Button>
                           
                      
                    </Form>

                        

                    </Tab>
                    <Tab eventKey="transfert" title="Transferência" >
                    <Form variant="light" className='boleto pl-lg-4 pt-5'>
                        <Form.Group controlId="formBasicNumber" className='d-flex  align-items-end  '>

                            <div className='col-4 p-0 pr-1 pr-lg-3'>

                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                custom
                            >
                                <option value="0">Selecione</option>
                                <option value="1">Nubank</option>
                                <option value="2">Itau</option>
                                <option value="3">Banco do brasil</option>
                            </Form.Control>
                            </div>



                            <div className='col-4 p-0 pr-1 pr-lg-3'>

                            <Form.Label >Agência</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            </div>

                            <div className='col-4 p-0 pr-1 pr-lg-3'>
                            <Form.Label >Conta corrente</Form.Label>
                            <Form.Control type="text" placeholder="" />

                            </div>


                        </Form.Group>

                        <Form.Group controlId="formBasicNumber" className=' text-valor d-flex justify-content-between align-items-center pt-3 '>
                            <div className='col-6 p-0 pr-1 pr-lg-3'>

                            <Form.Label >Valor da transferência</Form.Label>
                            <Form.Control type="text" placeholder="" />

                            </div>

                            <div className=' col-6 p-0 pl-1 pl-lg-3'>

                            <Form.Label >Identificação nos extratos</Form.Label>
                            <Form.Control type="text" placeholder="" />

                            </div>


                           
                        </Form.Group>
                        <Button variant="success" className='my-4'>Continuar</Button>


                    </Form>

                       
                    </Tab>

                </Tabs>

            </Col>
        </>
    
);
export default AccountPayments;