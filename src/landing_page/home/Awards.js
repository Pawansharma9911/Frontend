import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>

                </div>
                <div className='col-6 p-7 mt-5'>
                    <h1>Largest Stock Broker In India</h1>
                    <p>2+ million Finexa clients contribute to over of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row mt-5 mb-3'>
                        <div className='col-6'>
                        <ul>
                          <li>
                              <p>Future ans Options</p>
                          </li>
                          <li>
                              <p>Commodity derivatives</p>
                          </li>
                          <li>
                              <p>Currency derivatives</p>
                          </li>
                        </ul>
                        </div>

                        <div className='col-6'>
                        <ul>
                          <li>
                              <p>Stocks and IPOs</p>
                          </li>
                          <li>
                              <p>Direct mutual funds</p>
                          </li>
                          <li>
                              <p>Bonds and Govt. Securities</p>
                          </li>
                        </ul>
                        </div>

                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"80%"}}/>
                    

                </div>

            </div>
        </div>

     );
}

export default Awards;