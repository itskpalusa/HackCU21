import React from "react";

import { AuthUserContext } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization } from "../Session";

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{(authUser) => (
			<div>
				<h1>Account for email <br/> {authUser.email} </h1>
				<PasswordChangeForm />
			</div>
		)}
	</AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
