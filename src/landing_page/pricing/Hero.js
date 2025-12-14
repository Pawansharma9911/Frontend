import React from 'react';

function Hero() {
    return ( 
       <div className='container'>
        <div className='row text-center border-bottom mt-4 p-5 '>
            <h1>Pricing</h1>
            <p>Free equity investments and flat ₹20 traday and F&O trades</p>
        </div>
        <div className='row p-5' >
            
            <div className='col-4' style={{padding: "80px"}}>
              <img src='media/images/pricingEquity.svg'/>
              <h2 className='text-muted'>Free equity delivery</h2>
              <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>

            <div className='col-4'style={{padding: "80px"}} >
            <img src='media/images/intradayTrades.svg'/>
            <h2 className='text-muted'>Intraday and F&O trades</h2>
            <p className='text-muted'>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. 
            </p>
            </div>

            <div className='col-4 ' style={{padding: "80px"}}>
              <img src='media/images/pricingMF.svg'/>
              <h2 className='text-muted'>Free direct MF</h2>
              <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;