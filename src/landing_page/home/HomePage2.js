import React from 'react';
import HomePage from './HomePage';
import { useEffect, useState,  createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar3 from '../navbar3';

let flag = true;
function HomePage2(){
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    
//   const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
       flag = false;
       console.log(flag);
        return;
      }
    //else flag = true;
    try {
        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          flag = false;
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
    return (
        <>
        <Navbar3 flag = {flag}/><HomePage/>
        </>
    )
}

export default HomePage2;