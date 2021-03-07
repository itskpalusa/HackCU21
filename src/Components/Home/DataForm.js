import React, { Component } from "react";
import {
	Button,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { db } from "../Firebase";
import firebase from "firebase";
import DateTimePicker from "react-datetime-picker";
export default class DataForm extends Component {
	constructor(props) {
		super(props);
		this.findToggleNew = this.findToggleNew.bind(this);
		this.functionTakingMatchInput = this.functionTakingMatchInput.bind(this);
		this.state = {
			eventName: "",
			startTime: "",
			endTime: "",
			matchName: "",
			modalNew: false,
			value: [new Date(), new Date()],
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleStartChange = this.handleStartChange.bind(this);
		this.handleEndChange = this.handleEndChange.bind(this);

		this.onSubmit = this.onSubmit.bind(this);
	}
	handleNameChange(event) {
		console.log(event.target.value);
		this.setState({
			eventName: event.target.value,
		});
	}

	handleStartChange(event) {
		event.persist();
		this.setState({
			startTime: event.target.value,
		});
	}

	handleEndChange(event) {
		console.log(event.target.value);
		this.setState({
			endTime: event.target.value,
		});
	}

	onSubmit(event) {
		event.preventDefault();
		const { eventName, startTime, endTime } = this.state;
		var user = firebase.auth().currentUser;
		console.log(user.uid);
		console.log(eventName);
		console.log(startTime);
		console.log(endTime);
		alert("An event was submitted: " + eventName);
		db.collection("users")
			.doc(user.uid)
			.collection("events")
			.add({
				eventName: eventName,
				startTime: startTime,
				endTime: endTime,
			})
			.then(() => {
				console.log("Document successfully written!");
			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});
	}

	render() {
		return (
			<div>
				<Button
					color="success"
					onClick={this.findToggleNew}
					className="mb-1"
					block
				>
					Create Event{" "}
				</Button>{" "}
				<Modal isOpen={this.state.modalNew} toggle={this.findToggleNew}>
					<ModalHeader toggle={this.findToggleNew}> Create Event </ModalHeader>{" "}
					<ModalBody>
						<form onSubmit={this.onSubmit}>
							{" "}
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText> Create </InputGroupText>{" "}
								</InputGroupAddon>{" "}
								<Input
									placeholder="Event Name"
									value={this.eventName}
									onChange={this.handleNameChange}
								/>{" "}
							</InputGroup>{" "}
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText> Start </InputGroupText>{" "}
								</InputGroupAddon>{" "}
								<DateTimePicker
									onChange={(startTime) =>
										this.setState({ startTime: startTime })
									}
									value={this.state.startTime}
								/>
							</InputGroup>{" "}
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText> Stop </InputGroupText>{" "}
								</InputGroupAddon>{" "}
								<DateTimePicker
									onChange={(endTime) => this.setState({ endTime: endTime })}
									value={this.state.endTime}
								/>
							</InputGroup>{" "}
						</form>{" "}
					</ModalBody>{" "}
					<ModalFooter>
						<Button onClick={this.onSubmit} color="success">
							Add{" "}
						</Button>{" "}
						<Button color="secondary" onClick={this.findToggleNew}>
							Cancel{" "}
						</Button>{" "}
					</ModalFooter>{" "}
				</Modal>{" "}
			</div>
		);
	}


	findToggleNew() {
		this.setState({
			modalNew: !this.state.modalNew,
		});
	}

	functionTakingMatchInput = (event) => {
		this.setState({
			matchName: event.target.value,
		});
	};
}
