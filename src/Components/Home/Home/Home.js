import React from 'react';
import NavBar from '../NavBar/NavBar';
import AddFruits from '../AddFruits/AddFruits';
import FruitsList from '../FruitsList/FruitsList';

const Home = () => {

    return (
        <>
            <NavBar />
            <AddFruits />
            <FruitsList />
        </>
    );
};

export default Home;