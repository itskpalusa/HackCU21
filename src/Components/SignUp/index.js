import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase, db } from "../Firebase";
import * as ROUTES from "../constants/routes";

const SignUpPage = () => (
  <div>
    <h1 class="text-center">Sign Up</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
	username: "",
	email: "",
	passwordOne: "",
	passwordTwo: "",
	error: null,
};

class SignUpFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			...INITIAL_STATE,
		};
	}

	onSubmit = (event) => {
		event.preventDefault();
		const { username, email, passwordOne } = this.state;

		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then((authUser) => {
				// Create a user in your Firebase realtime database
				//uid = authUser.user.uid;
				db.collection("users")
					.doc(authUser.user.uid)
					.set({
						uid: authUser.user.uid,
						name: username,
						email: email,
						signUpDate: new Date(),
						eventNamesArray: [],
						WeekOfMarch6thHoursTotal: 0,
						WeekOfMarch6thHighscoreName: "",
						WeekOfMarch6thHighscoreAmount: 0,
					})
					.then(() => {
						console.log("Document successfully written!");
					})
					.catch((error) => {
						console.error("Error writing document: ", error);
					});
				this.props.firebase
					.user(authUser.user.uid)
					.set({
						username,
						email,
					})
					.then(() => {
						this.setState({
							...INITIAL_STATE,
						});
						this.props.history.push(ROUTES.HOME);
					})
					.catch((error) => {
						this.setState({
							error,
						});
					});
			})
			.catch((error) => {
				this.setState({
					error,
				});
			});
		this.props.history.push(ROUTES.HOME);
	};

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { username, email, passwordOne, passwordTwo, error } = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === "" ||
			email === "" ||
			username === "";

		return (
      <div className="container pt-3">
      <form onSubmit={this.onSubmit}>
        <br/>
        <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name </label>
          <br/>
        <input
          className="form-control form-control-lg"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email</label>
          <br/>
        <input
          className="form-control form-control-lg"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Password</label>
          <br/>
        <input
          className="form-control form-control-lg"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Confirm Password</label>
          <br/>
        <input
          className="form-control form-control-lg"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        </div>
        <button className="btn btn btn-primary"disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
      </div>
		);
	}
}

const SignUpLink = () => (
  <p class="container">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
