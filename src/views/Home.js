import React, { useState } from 'react';

import Hero from "../components/Hero";
import Itens from "../components/Itens";
import CardList from "../components/CardList";
import ButtonCenter from "../components/Button-center";
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";
import AccountModal from "../components/AccountModal";
import posts from '../data/posts';






const Home = ({ handleClick, handleCreateAcc}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
         

            <Hero handleCreateAcc={() => setShowModal(true)} />
            <Itens />
            <CardList posts={posts} />
            <ButtonCenter handleCreateAcc={() => setShowModal(true)} />
            <Institutional handleCreateAcc={() => setShowModal(true)}/>
            <Faq />
            <AccountModal show={showModal} handleClose={() => setShowModal(false)} />

          
           
        </>
    );
}

export default Home;
