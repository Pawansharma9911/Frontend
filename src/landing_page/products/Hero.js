import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom '>
            <div className='row text-center mt-5 '>
                <h2>Technology</h2>
                <h4 className='mt-2 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
                <h6 className='mt-2 text-muted mb-5'>Check out our <a style={{textDecoration:"none"}}href='https://zerodha.com/investments'>investment offerings →</a></h6>
            </div>
        </div>
     );
}

export default Hero;