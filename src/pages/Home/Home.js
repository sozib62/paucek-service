import React from 'react';
import Header from '../../shared/Header/Header';
import MyDestination from '../MyDestination/MyDestination';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <MyDestination></MyDestination>
        </div>
    );
};

export default Home;