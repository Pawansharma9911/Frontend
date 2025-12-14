import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
        <div className='row text-center'>
            
            <h2>The Finexa Universe</h2>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png"/>
                <p>Thematic investment platform</p>
            </div>

            <div className='col-4 p-3 mt-5'>
            <img src="media/images/streakLogo.png " style={{width: "40%"}}/>
            <p>Algo & Strategy platform</p>
            </div>

            <div className='col-4 p-3 mt-5'>
            <img src="media/images/sensibullLogo.svg"/>
            <p>Options trading platform</p>
            </div>

            <div className='col-4 p-3 mt-3'>
                <img src="media/images/zerodhaFundhouse.png" style={{width: "50%"}}/>
                <p>Asset management</p>
            </div>

            <div className='col-4 p-3 mt-3'>
            <img src="media/images/goldenpiLogo.png" style={{width: "50%"}}/>
            <p>Bonds trading platform</p>
            </div>

            <div className='col-4 p-3 mt-3'>
            <img src="media/images/dittoLogo.png" style={{width: "30%"}}/>
            <p>Insurance</p>
            </div>

        </div>
       </div>
     );
}

export default Universe;