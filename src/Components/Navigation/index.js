import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">TimeTrack</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">          <li class="nav-item active">
      <Link className="nav-link"  to={ROUTES.LANDING}>Landing</Link>
    </li>
      <li class="nav-item active">      <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
    </li>
      <li class="nav-item active">      <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
    </li>

      <li class="nav-item active">      <SignOutButton />
    </li>
 </ul>
  </div>
</nav>);

const NavigationNonAuth = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">TimeTrack</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">          <li class="nav-item active">
      <Link className="nav-link" to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
 </li>
 </ul>
  </div>
</nav>);

export default Navigation;
