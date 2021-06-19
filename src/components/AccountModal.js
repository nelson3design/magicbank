import React, {useState} from "react";
import { Modal, Button, Form} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import"../index.scss";

const AccountModal = ({ show, handleClose, auth}) =>{

    const history =useHistory();

    const [name, setName] = useState();

    const handleSubmit = () => {
        auth.login(name, "1234", history.push('/dashboard'));
        handleClose();
    }



    
    return(

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className="text-pri">Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control  type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                    
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Seu e-mail</Form.Label>
                    <Form.Control type="email" placeholder="Seu email" />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                    >
                        <option value="0">Florianópolis - SC</option>
                        <option value="1">Curitiba - PR</option>
                        <option value="2">São Paulo - SP</option>
                        <option value="3">Rio de Janeiro - RJ</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check className="text-seg" type="checkbox" label="Eu li e concordo com os termos de uso." />
                </Form.Group>
                
            </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" className="btn-pri" onClick={handleClose}>
                Cancelar
          </Button>
            <Button variant="primary" className="btn-seg"  onClick={handleSubmit}>
                Criar conta
          </Button>
        </Modal.Footer>
    </Modal>

);};

export default AccountModal;