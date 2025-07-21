import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5' style={{margin:"5rem"}}>
            <div className='row text-center' style={{color:"#3B3B3B"}}>
                <h1 className='fs-1 mb-3'>Zerodha Products</h1>
                <p className='fs-5 mb-4'>Sleek, modern, and intuitive trading platforms</p>
                <p style={{margin:"0 0 6rem 0", color:"GrayText"}}>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a></p>
                <hr></hr>
            </div>
        </div>
     );
}

export default Hero;