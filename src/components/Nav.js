import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
// import Auth from '../auth/Auth'
// let auth = new Auth()

export default function Nav() {
  return (
    <div className="Nav">
        <div className="img">
          <Link to="/">
            <img src="../img/cocktail.webp" alt="wine"></img>
          </Link>
          <Link to="/">
            <h1>Infinity Bar</h1>
          </Link>
          <div className="dropdown">
            <button className="dropbtn">|||</button>
            <div className="dropdown-content">

              { localStorage.user ? 
                <div>
                  <Link to="/profile">Profile</Link>
                  <Link to="/cocktails">Cocktails</Link>
                  <Link to="/history">History</Link>
                  <Link to="/logout">Logout</Link>
                </div>
                :
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
              }
             
              
            </div>
          </div>
          
        </div>
      </div>
  )
}
