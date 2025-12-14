import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid'id='supportHero'>
            <div className='p-3 mb-2 ' id='supportWrapper' >
                <h6>Support portal</h6>
                <a href='' style={{color: "white"}}>Track Tickets</a>
            </div>
            <div className='row'>
                <div className='col-6 ' style={{padding: " 0 150px", marginBottom: "50px"}}>
                    <h5 className='mb-3'>Search for ana answer or browse help topics to create a ticket</h5>
                    
                    <input placeholder='Eg. how do I activate F&O' className='mb-2'/>
                    <br/>
                    
                    <a href='' style={{color: "white"}}>Track account opening</a> &nbsp;
                    <a href='' style={{color: "white"}}>Track segment activation</a> &nbsp;
                    <a href='' style={{color: "white"}}>intraday</a> &nbsp;
                    <a href='' style={{color: "white"}}>margins</a> &nbsp;
                    <a href='' style={{color: "white"}}>Kite user manual</a> 


                </div>
                <div className='col-6' style={{paddingLeft: "170px"}}>
                    <h5>Featured</h5>
                    <a href='' style={{color: "white"}}>Current Takeovers and delisting - january 2024</a> 
                    <br/>
                    <a href='' style={{color: "white"}}>Latest Intraday leverages - MIS & CO</a> 
                </div>
            </div>
        </section>
     );
}

export default Hero;