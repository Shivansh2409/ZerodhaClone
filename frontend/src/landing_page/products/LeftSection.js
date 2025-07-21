import React from 'react';
 function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='containerp-5' style={{margin:"5rem"}}>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL} alt={productName} className='img-fluid' style={{width:"80%", height:"auto", margin:"0 2rem 0 6rem"}} />
                </div>
                <div className='col-6'  style={{padding:"2rem 8rem 0 8rem"}}>
                    <h1 style={{color:"black"}}>{productName}</h1>
                    <p>
                        {productDescription}
                    </p>
                    <div  style={{margin:"2rem 0 2rem 0"}}>
                        <a href='' style={{textDecoration:"none",margin:"2rem 2rem 2rem 0"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <img src="/images/googlePlayBadge.svg" alt="Google Play" style={{width:"150px", height:"50px", marginRight:"10px"}} />
                        <img src="/images/appstoreBadge.svg" alt="App Store" style={{width:"150px", height:"50px"}} />
                    </div>
                </div>
            </div>
        </div>
     );
 }
 
 export default LeftSection;