import React from 'react';
import { Button, Col, Tabs, Table, Tab  } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountBalance = ({data} ) => {
    const { lastestbalance, futurebalance}= data;
    return (
    <>
        <Col xs={12} lg={3} className='mt-2 mt-lg-5 pt-lg-4'>
            <h3 className='my-5'>Conta corrente</h3>
            <strong>Saldo em conta corrent</strong>
            <h4 className='text-success'>
                <small>R$</small>  3.450 <small>,00</small>

            </h4>
            <strong className='mt-4'>Cheque especial</strong>

            <p className=' mb-0'>Limite disponível </p>

            <p className=''>R$ 5.000,00</p>
            <Button className='mt-4' variant="secondary">Ver extrato</Button>
        </Col>

        <Col xs={12} lg={5} className='mt-5 mt-lg-5 pt-lg-5'>
            <Tabs defaultActiveKey="profile" className=' mt-lg-5 pt-lg-5'>
                <Tab eventKey="ultimo" title="Últimos lançamentos">

                    <Table variant="light" borderless striped hover>
                        <thead>
                            <tr>

                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Valor (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lastestbalance.map(({ date, description, value }) =>
                                <tr>
                                    <td>{date}</td>
                                    <td>{description}</td>
                                    <td>{value}</td>

                                </tr>
                            )}


                        </tbody>
                    </Table>

                </Tab>
                <Tab eventKey="futuro" title="Lançamentos futuros" >

                    <Table variant="light" borderless striped hover>
                        <thead>
                            <tr>

                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Valor (R$)</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {futurebalance.map(({ date, description, value }) =>
                                <tr>
                                    <td>{date}</td>
                                    <td>{description}</td>
                                    <td>{value}</td>

                                </tr>
                            )}


                        </tbody>
                    </Table>

                </Tab>

            </Tabs>

        </Col>
    </>
    )
};
  export default AccountBalance;