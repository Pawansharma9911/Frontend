import React from 'react';
import { assets } from '../../assets/assets.js'

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    
    return ( 
       <div className='container'>
        <div className='row mt-5'>
            <div className='col-6 mt-5 mb-5'>
                <img src={imageURL}/>
                
            </div>
            <div className='col-6 mt-5'>
                <h3>{productName}</h3>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a>
                    <a href={learnMore} style={{marginLeft:"65px", textDecoration:"none"} }>Learn More →</a>
                </div>
                <div className='mt-3'>     
                   <a href={googlePlay}> <img src={assets.googlePlayBadge}/></a>
                   <a href={appStore} style={{marginLeft:"25px"}}> <img src={assets.appstoreBadge}/></a>
               </div>

                
            </div>

        </div>
       </div>
     );
}

export default LeftSection;