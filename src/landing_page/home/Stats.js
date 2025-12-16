import React from 'react';
import ecosystem from "../../assets/ecosystem.png";

function Stats() {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-6 p-5'>
                <h2 className='mt-5'>Trust with confidence</h2>
                <h3 className='mt-5'>Customer-first always </h3>
                <p className='text-muted'>That's why 1.6+ crore customers trust Finexa with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h3 className='mt-5'>No spam or gimmicks </h3>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h3 className='mt-5'>The Finexa universe </h3>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>

            <div className='col-6 mt-5 p-5'>
                <img src={ecosystem} className='p-25' style={{width: "90%"}}/>
                <a href='' style={{textDecoration: "none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='' style={{textDecoration: "none"}}>Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>


            </div>

        </div>
      
       </div>
     );
}

export default Stats;