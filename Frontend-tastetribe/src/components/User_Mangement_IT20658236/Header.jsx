import React from 'react';


function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <h1>TASTETRIBE</h1>
      </div>
      <nav className="nav-container">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/Login">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;