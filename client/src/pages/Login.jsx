import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { EMAIL_REGEX, USERNAME_REGEX } from '../Constants';
import { checkValid } from '../Utils';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [regError, setRegError] = useState("");
  const [regUser, setRegUser] = useState("");
  const [email, setEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regPass2, setRegPass2] = useState("");

  const toRegPage = () => {
    setLogin(false);
    setLoginError("");
    setUsername("");
    setPassword("");
    document.querySelector("#login_form").reset();
  };

  const toLoginPage = () => {
    setLogin(true);
    setRegPass("");
    setRegPass2("");
    setRegUser("");
    setEmail("");
    document.querySelector("#reg_form").reset();
  };

  const doRegister = () => {
    setRegError("");
    if (regUser === "" || email === "" || regPass === "" || regPass2 === "") return;
    if (regUser.length < 5 || regUser.length > 32) {
      setRegError("Username must be between 5 and 32 characters");
      return;
    }
    if (!checkValid(USERNAME_REGEX, regUser)) {
      setRegError("Invalid username only a-z and 0-9 allowed");
      return;
    }
    if (!checkValid(EMAIL_REGEX, email)) {
      setRegError("Invalid email address");
      return;
    }
    if (regPass.length < 8 || regPass.length > 100) {
      setRegError("Password must be between 8 and 100 characters");
      return;
    }
    if (regPass !== regPass2) {
      setRegError("Passwords did not match");
      return;
    }
    const data = { username: regUser, password: regPass, email };
    fetch("/api/v1/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((res) => {
        const { success, message } = res;
        if (success) {
          setRegPass("");
          setRegPass2("");
          setRegUser("");
          setEmail("");
          document.querySelector("#reg_form").reset();
          document.querySelector("#reg_succ").style.display = "block";
          setTimeout(() => {
            document.querySelector("#reg_succ").style.display = "none";
          }, 3000);
        } else {
          if (message.includes("duplicate key error")) {
            setRegError(`${message.includes("username") ? "Username already exists" : "Email already exists"}`);
          } else {
            setRegError("Something went wrong. Please try again.");
          }
        }
      });
  };

  const doLogin = () => {
    setLoginError("");
    if (username === "" || password === "") return;

    fetch("/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then((res) => {
        const { userID, message } = res;
        if (userID) {
          localStorage.setItem("username", username);
          localStorage.setItem("userID", userID);
          navigate("/home");
        } else {
          setLoginError(message);
        }
      });
  };

  return (

    <section class="bg-login bg-cover bg-center ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src={logo} alt="logo" />
          Insighgater
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1> */}
            {isLogin ? (
              <form id="login_form" class="space-y-4 md:space-y-6" >
                <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Log in to your account</h3>

                <div>
                  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username"/>
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" value={password}
             onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="flex items-center justify-between">
                  <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button onClick={doLogin} type="button" class="w-full text-white bg-green-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700">Sign in</button>
                {loginError && <p className="text-center text-red-500 text-sm">{loginError}</p>}
          <h3 className="text-lg font-medium text-center text-blue-800 text-primary-600 hover:underline dark:text-primary-500" onClick={toRegPage}>Create an account</h3>
              </form>
            ) : (
              <form id="reg_form" class="space-y-4 md:space-y-6" >
                {/* <img src={logo} alt="logo" className="w-1/2 m-auto" /> */}
                <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create your account</h3>
                <input type="text" value={regUser} onChange={e => setRegUser(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                <input type="password" value={regPass} onChange={e => setRegPass(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                <input type="password" value={regPass2} onChange={e => setRegPass2(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Retype Password" />
                <button type="button" onClick={doRegister} className="w-full text-white bg-green-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700">Register</button>
                {regError && <p className="text-center text-red-500 text-sm">{regError}</p>}
                <p id="reg_succ" className="text-green-500 hidden">User registered successfully</p>
                <h3 className="text-lg font-medium text-center text-blue-800 text-primary-600 hover:underline dark:text-primary-500" onClick={toLoginPage}>Go to login window</h3>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>


    // <div className="h-screen bg-login bg-cover bg-center flex items-center justify-center ">
    //   {isLogin ? (
    //     <form id="login_form" className="w-96 text-center block bg-white rounded-xl p-4 relative">
    //       <img src={logo} alt="logo" className="w-1/2 m-auto" />
    //       <h3 className="mb-2 font-bold">Log in to your account</h3>
    //       <input 
    //         type="text" 
    //         className="bg-gray-50 border border-gray-300 text-gray-900 block mb-2 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    //         placeholder="Username" 
    //         value={username}
    //         onChange={(e)=>setUsername(e.target.value)}
    //       />
    //       <input 
    //         type="password" 
    //         className="border-2 border-solid border-slate-200 w-full px-2 py-1 rounded block mb-2 focus:outline-none focus:border-blue-500" 
    //         placeholder="Password" 
    //         value={password}
    //         onChange={(e)=>setPassword(e.target.value)}
    //       />
    //       <button 
    //         type="button" 
    //         className="mb-2 bg-blue-500 w-full py-2 rounded text-white font-bold hover:opacity-80" 
    //         onClick={doLogin}
    //       >
    //         Login
    //       </button>
    //       {loginError && <p className="text-center text-red-500 text-sm">{loginError}</p>}
    //       <h3 className="text-sm text-blue-500 cursor-pointer" onClick={toRegPage}>Create an account</h3>
    //     </form>
    //   ) : (
    //     <form id="reg_form" className="w-96 text-center block bg-white rounded-xl p-4">
    //       <img src={logo} alt="logo" className="w-1/2 m-auto" />
    //       <h3 className="mb-2 font-bold">Create your account</h3>
    //       <input type="text" value={regUser} onChange={e=>setRegUser(e.target.value)} className="border-2 border-solid border-slate-200 w-full px-2 py-1 rounded block mb-2 focus:outline-none focus:border-blue-500" placeholder="Username" />
    //       <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="border-2 border-solid border-slate-200 w-full px-2 py-1 rounded block mb-2 focus:outline-none focus:border-blue-500" placeholder="Email" />
    //       <input type="password" value={regPass} onChange={e=>setRegPass(e.target.value)} className="border-2 border-solid border-slate-200 w-full px-2 py-1 rounded block mb-2 focus:outline-none focus:border-blue-500" placeholder="Password" />
    //       <input type="password" value={regPass2} onChange={e=>setRegPass2(e.target.value)} className="border-2 border-solid border-slate-200 w-full px-2 py-1 rounded block mb-2 focus:outline-none focus:border-blue-500" placeholder="Retype Password" />
    //       <button type="button" onClick={doRegister} className="mb-2 bg-blue-500 w-full py-2 rounded text-white font-bold hover:opacity-80">Register</button>
    //       {regError && <p className="text-center text-red-500 text-sm">{regError}</p>}
    //       <p id="reg_succ" className="text-green-500 hidden">User registered successfully</p>
    //       <h3 className="text-sm text-blue-500 cursor-pointer" onClick={toLoginPage}>Go to login window</h3>
    //     </form>
    //   )}
    // </div>
  );
};

export default Login;