import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container p-4'>
            <div className='row' style={{margin:"0 4rem 4rem 4rem"}}>
                <h1 className='text-center' style={{color:"#3B3B3B",margin:"0 0 5rem 0"}}>People</h1>
                <div className='col-6 text-center' >
                    <img src="/images/IMG_20250530_125347.jpg" alt="Team" style={{width:"60%",borderRadius:"100%"}} />
                    <h5 className='text-center' style={{margin:"2rem"}}>Shivansh Rathor</h5>
                </div>
                <div className='col'>
                    <p>Hi, I'm Shivansh Rathor, a passionate and dedicated web developer with a strong foundation in Data Structures and Algorithms (DSA) using Java. I’ve completed comprehensive training in MERN stack development (MongoDB, Express.js, React.js, and Node.js), which enables me to build full-stack web applications with efficiency and performance in mind.</p>
                    <p>Currently, I’m honing my skills by recreating real-world projects like Zerodha, aiming to master both frontend precision and backend scalability. I believe in writing clean, maintainable code and constantly strive to learn new technologies to stay updated in the ever-evolving tech world.</p>
                    <h5> contact details:</h5> <h6>shivanshrathore61@gmail.com</h6>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;