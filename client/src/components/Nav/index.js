import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">

          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/products">Products</Link>
          </li>
          <li className="mx-1">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <Link to="/profile">Profile</Link>
          </li>

          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <>
        <ul className="flex-row">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/products">Products</Link>
          </li>
          <li className="mx-4">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="mx-4">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mx-4">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-4">
            <Link to="/login">Login</Link>
          </li>
         </ul>
        </>
      );
    }
  }


  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="Home Page">
          💻 
          </span>
          🅦🅔🅑 🅣🅗🅔 🅑🅤🅘🅛🅓🅔🅡
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
