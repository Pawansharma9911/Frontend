import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Login.css";   // <--- custom CSS here
import { useAppContext } from "../Context/AppContext";
const BASE_URL = process.env.REACT_APP_API_URL;


const Login = () => {
  const { setShowLogin, setToken, setUser } = useAppContext();

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${BASE_URL}/${state}`, {
        email,
        password,
        name: state === "register" ? name : undefined,
      });
     console.log(data);
      if (data.success) {
        navigate("/");
        setToken(data.token);
        setUser(data.user);  // <<< THIS IS MOST IMPORTANT

        localStorage.setItem("token", data.token);
        setShowLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="overlay" onClick={() => setShowLogin(false)}>
      <form
        className="login-box"
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="title">
          <span className="primary">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="field">
            <p>Name</p>
            <input
              type="text"
              value={name}
              placeholder="type here"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="field">
          <p>Email</p>
          <input
            type="email"
            value={email}
            placeholder="type here"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <p>Password</p>
          <input
            type="password"
            value={password}
            placeholder="type here"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {state === "register" ? (
          <p className="toggle-text">
            Already have account?{" "}
            <span className="primary link" onClick={() => setState("login")}>
              click here
            </span>
          </p>
        ) : (
          <p className="toggle-text">
            Create an account?{" "}
            <span className="primary link" onClick={() => setState("register")}>
              click here
            </span>
          </p>
        )}

        <button className="submit-btn">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
