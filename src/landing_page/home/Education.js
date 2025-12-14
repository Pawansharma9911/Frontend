import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row' style={{marginTop: "90px"}}>
                <div className='col'>
                   <img src='media/images/education.svg'/>
                </div>
                <div className='col pt-3'>
                    <h3 className='text-muted'>Free and open market education</h3>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    




                </div>
            </div>
        </div>
     );
}

export default Education;