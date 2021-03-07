import React from "react";
import DataForm from "./DataForm";

import { withAuthorization } from "../Session";
import Table from "./Table";
const HomePage = () => (
	<div className="container">
		<div className="jumbotron">
			<h1 className="display-4 text-center"> Home Page </h1>
			<center>
				<DataForm />
			</center>
		</div>{" "}
		<br />
		<hr />
		<Table />
	</div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
