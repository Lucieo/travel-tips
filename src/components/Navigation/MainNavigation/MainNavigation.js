import React from 'react';
import { NavLink } from 'react-router-dom';

import MobileToggle from '../MobileToggle/MobileToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './MainNavigation.css';

const mainNavigation = props => (
  <nav className="main-nav">
    <div className="main-nav__logo">
      <NavLink to="/" className="main-nav__home-link">
        <Logo />
      </NavLink>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      <NavigationItems isAuth={props.isAuth} onLogout={props.onLogout} />
    </ul>
    <MobileToggle onOpen={props.onOpenMobileNav} />
  </nav>
);

export default mainNavigation;
