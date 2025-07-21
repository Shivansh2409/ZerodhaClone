import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HeroPage() {
    return ( 
        <>
           
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </>
     );
}

export default HeroPage;