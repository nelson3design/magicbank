import React from 'react';
import { Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountHistory = ({ data }) => {
    const { extrato} = data;
    return (
        <>
            

            <Col xs={12} lg={8} className='mt-5 mt-lg-5 pt-lg-5'>

                <h3>Extrato de conta corrente</h3>
                

                <Table variant="light" borderless striped hover>
                    <thead>
                        <tr>

                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor (R$)</th>
                           
                            <th>Saldo (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {extrato.map(({ date, description, value, saldo }) =>
                            <tr>
                                <td>{date}</td>
                                <td>{description}</td>
                                <td className='valor'>{value}</td>
                               
                              
                                <td>{saldo}</td>

                            </tr>
                        )}


                    </tbody>
                </Table>


            </Col>
        </>
    )
};
export default AccountHistory;