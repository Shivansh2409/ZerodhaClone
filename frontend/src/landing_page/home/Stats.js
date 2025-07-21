import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row' >
                <div className='col-5 mt-5'>
                    <h1 className='m-3 mb-5'>Trust with confidence</h1>
                    <p className='mb-5'>
                        <h3 className='mb-3'>Customer-first always</h3>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </p>
                    <p className='mb-5'>
                        <h3 className='mb-3'>No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </p>
                    <p className='mb-5'>
                        <h3 className='mb-3'>The Zerodha universe</h3>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </p>
                    <p className='mb-5'>
                        <h3 className='mb-3'>Do better with money</h3>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </p>
                </div>
                <div className='col-7 mt-5'>
                    <img src='/images/ecosystem.png' alt='img' style={{width:"95%"}}></img>
                    <div className='text-center'>
                        <a href='#'style={{textDecoration:"none"}} className='m-5'>Explore our product<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='#'style={{textDecoration:"none"}} className='m-5'>Try kite domo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <img src='/images/pressLogos.png' alt=''style={{width:"60%",height:"100%",marginLeft:"15rem"}} className='mt-5'></img>
            </div>
        </div>
        );
}

export default Stats;