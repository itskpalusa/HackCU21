/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../constants/routes";

import { AuthUserContext } from "../Session";

const Navigation = () => (
	<div>
		<AuthUserContext.Consumer>
			{(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
		</AuthUserContext.Consumer>
	</div>
);

const NavigationAuth = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand">TimeTrack</a>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				{" "}
				<li className="nav-item active">
					<Link classNameName="nav-link" to={ROUTES.LANDING}>
						Landing
					</Link>
				</li>
				<li className="nav-item active">
					{" "}
					<Link classNameName="nav-link" to={ROUTES.HOME}>
						Home
					</Link>
				</li>
				<li className="nav-item active">
					{" "}
					<Link classNameName="nav-link" to={ROUTES.ACCOUNT}>
						Account
					</Link>
				</li>
				<li className="nav-item active">
					{" "}
					<SignOutButton />
				</li>
			</ul>
		</div>
	</nav>
);

const NavigationNonAuth = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand">TimeTrack</a>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				{" "}
				<li className="nav-item active">
					<Link classNameName="nav-link" to={ROUTES.LANDING}>
						Landing
					</Link>
				</li>
				<li className="nav-item active">
					<Link classNameName="btn btn-outline-primary" to={ROUTES.SIGN_IN}>
						Sign In
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navigation;
