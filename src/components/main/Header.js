import React from 'react';
import { Link } from 'react-router-dom'
import { HeaderBar } from '../styled/Style'

const Header = () => {
    return (
        <HeaderBar>
          <div className="container clearfix">
            <h1 className="LogoTitle">
            <Link to='/' exact >Welcome, This is Yu-na's World!</Link> 
            </h1>
            <nav className="Navi">
              <ul className="clearfix">
                  <li><Link to='/' exact >Home</Link></li>
                  <li><Link to='/project'>Project</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </HeaderBar>
    );
};

export default Header;