import React from 'react';

function Hero() {
    return (  
        <div className="container text-center p-5">
            <div className='row mb-5'>
                <img src='/images/homeHero.png' alt='Hero' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:"25%",margin:"0 auto"}}className='p-3 btn btn-primary fs-5'>Sign Up for free</button>
            </div>
        </div>
    );
}

export default Hero;