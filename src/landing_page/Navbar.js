import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./Context/AppContext";
import Finexa from "../assets/finexa3.png";

function Navbar() {
  const {setShowLogin,user,logout,axios} = useAppContext()
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    {user ? logout() : setShowLogin(true)}

    }

  return (
    
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src={Finexa} alt="Logo" style={{width: "15%"}}/>
           

          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             
              <button onClick={handleLogin } className='cursor-pointer px-1 py-0.5 text-black hover:text-gray-600 bg-transparent rounded transition-all border border-white '>{user ? 'Logout':'Login'}</button>
             { user && (<li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="https://dashboard-swart-alpha-72.vercel.app">
                  dashboard
                </Link>
              </li>)}
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              
            
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
