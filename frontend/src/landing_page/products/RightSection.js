import React from 'react';
 function RightSection({imageURL,productName,productDescription}) {
    return ( 
        <div className='container p-5' style={{margin:"5rem"}}>
            <div className='row'>
                <div className='col-6'  style={{padding:"8rem 8rem 0 8rem"}}>
                    <h1 style={{color:"black"}}>{productName}</h1>
                    <p>
                        {productDescription}
                    </p>
                    <div  style={{margin:"2rem 0 2rem 0"}}>
                        <a href='' style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageURL} alt={productName} className='img-fluid' style={{width:"80%", height:"auto", margin:"0 6rem 0 2rem"}} />
                </div>
            </div>
        </div>
     );
 }
 
 export default RightSection;