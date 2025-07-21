import React from 'react';

function OpenAccount() {
    return ( 
         <div className="container text-center mt-5 p-5 mb-5">
            <div className='row mb-5'>
                <h1 className='mt-5 mb-5'>Open a Zerodha account</h1>
                <p className='mb-5' style={{color:"GrayText"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{width:"20%",margin:"0 auto"}}className='p-2 btn btn-primary fs-5'>Sign Up for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;