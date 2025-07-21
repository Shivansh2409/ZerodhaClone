import React from 'react';
function Awards() {
    return (
        <div className='container p-5'>
            <div className='row mt-5 mb-5'>
                <div className='col-6 mt-5'>
                    <img src="/images/largestBroker.svg" alt="Awards"  />
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-4'>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                            <li className='mt-3'>Futures and Options</li >
                            <li className='mt-3'>Commodity derivatives</li >
                            <li className='mt-3'>Currency derivatives</li >
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                            <li className='mt-3'>Stocks & IPOs</li >
                            <li className='mt-3'>Direct mutual funds</li >
                            <li className='mt-3'>Bonds and Govt. </li >
                            </ul>
                        </div>
                    </div>
                    <img src='/images/pressLogos.png' alt=''style={{width:"90%"}} className='mt-5'></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;