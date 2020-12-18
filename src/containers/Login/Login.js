import React from 'react';
import "./Login.css";

export default function Login (props) {

        const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        } = props;
    
        return (
           <section className="login">
               <div className="loginContainer">
                   <label>Username</label>
                   <input 
                   type = "text" 
                   autofocus required 
                   value={email} 
                   onChange={e => setEmail(e.target.value)}
                   />
                  <p className="errorMsg">{emailError}</p>
    
                  <label>Password</label>
                  <input 
                   type = "password" 
                   required 
                   value={password} 
                   onChange={e => setPassword(e.target.value)}
                   />
                  <p className="errorMsg">{passwordError}</p>
                  <div className="btnContainer">
                      {hasAccount ? (
                          <>
                          <button className="btn-sign" onClick={handleLogin}>Sign In</button>
                          <p>Don't have an account? 
                          <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                          </p>
                          </>
                          ) : (
                            <>
                            <button className="btn-sign" onClick={handleSignup}>Sign Up</button>
                            <p>Have an Account? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                            </p>
                            </>
                      )}
                  </div>           
                  </div>
           </section>
        )
    }