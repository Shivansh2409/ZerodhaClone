import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center' >
                <h1 className="mt-5"style={{color:"#3B3B3B",fontSize:"3rem"}}>Charges</h1>
                <p style={{color:"GrayText",fontSize:"1.2rem",margin:"1rem 0 11rem 0"}}>List of all charges and taxes</p>
                <div className='col text-center' style={{margin:"0 1rem 0 4rem"}}>
                    <img src='/images/pricing-eq.svg' style={{width:"75%"}}></img>
                    <h1 className='fs-2 mb-4'>Free equity delivery</h1>
                    <p style={{color:"GrayText"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                 <div className='col text-center' style={{margin:""}}>
                    <img src='/images/other-trades.svg' style={{width:"75%"}}></img>
                    <h1 className='fs-2 mb-4'>Intraday and F&O </h1>
                    <p style={{color:"GrayText"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                 <div className='col text-center' style={{margin:"0 4rem 0 1rem"}}>
                    <img src='/images/pricing-eq.svg' style={{width:"75%"}}></img>
                    <h1 className='fs-2 mb-4'>Free direct MF</h1>
                    <p style={{color:"GrayText"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;