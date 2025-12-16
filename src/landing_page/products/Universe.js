import React from 'react';
import smallcaseLogo from "../../assets/smallcaseLogo.png";
import streakLogo from "../../assets/streakLogo.png";
// import sensibullLogo from "../../assets/sensibullLogo.svg";
import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import goldenpiLogo from "../../assets/goldenpiLogo.png";
import dittoLogo from "../../assets/dittoLogo.png";
import { assets } from '../../assets/assets.js'


function Universe() {
    return ( 
        <div className='container mt-5'>
        <div className='row text-center'>
            
            <h2>The Finexa Universe</h2>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='col-4 p-3 mt-5'>
                <img src={smallcaseLogo}/>
                <p>Thematic investment platform</p>
            </div>

            <div className='col-4 p-3 mt-5'>
            <img src={streakLogo} style={{width: "40%"}}/>
            <p>Algo & Strategy platform</p>
            </div>

            <div className='col-4 p-3 mt-5'>
            <img src={assets.sensibullLogo}/>
            <p>Options trading platform</p>
            </div>

            <div className='col-4 p-3 mt-3'>
                <img src={zerodhaFundhouse} style={{width: "50%"}}/>
                <p>Asset management</p>
            </div>

            <div className='col-4 p-3 mt-3'>
            <img src={goldenpiLogo} style={{width: "50%"}}/>
            <p>Bonds trading platform</p>
            </div>

            <div className='col-4 p-3 mt-3'>
            <img src={dittoLogo} style={{width: "30%"}}/>
            <p>Insurance</p>
            </div>

        </div>
       </div>
     );
}

export default Universe;