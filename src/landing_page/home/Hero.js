import React from 'react';
import { useAppContext } from '../Context/AppContext';
function Hero() {
    const {setShowLogin} = useAppContext();

    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button onClick={() => setShowLogin(true)}className='p-2 btn btn-primary' style={{width: "15%", margin: "0 auto"}} >Signup Now</button>
            </div>

        </div>
     );
}

export default Hero;