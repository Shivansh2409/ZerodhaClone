import React from 'react';

function Pricing() {
    return ( 
    <div className='container m-5'>
        <div className='row'>
            <div className='col-4 m-5 p-5'>
                <h1 className='mb-5'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='#' style={{textDecoration:"none"}} className=''>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-7' style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                
                <div style={{display:"flex",justifyContent:"start",alignItems:"flex-end", fontSize:"0.8rem"}}>
                    <img src='/images/pricing0.svg' alt='Pricing' style={{width:"60%"}} />
                    <p>Free account <br></br>opening</p>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"flex-end", fontSize:"0.8rem"}}>
                    <img src='/images/pricing0.svg' alt='Pricing' style={{width:"41%"}} />
                    <p>Free equity delivery and direct mutual funds</p>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"flex-end", fontSize:"0.8rem"}}>
                    <img src='/images/other-trades.svg' alt='Pricing' style={{width:"60%"}} />
                    <p>Intraday and <br></br>F&O</p>
                </div>
                
            </div>
        </div>
    </div> 
);
}

export default Pricing;