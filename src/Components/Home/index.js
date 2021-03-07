import React from "react";
import DataForm from "./DataForm";

import { withAuthorization } from "../Session";

const HomePage = () => (
	<div>
		<h1> Home Page </h1>{" "}
		<p> The Home Page is accessible by every signed in user. </p> <DataForm />
	</div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
