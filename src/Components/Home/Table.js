import React, { Component } from "react";
import { db } from "../Firebase";
import firebase from "firebase";

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			eventStarts: [],
			eventEnds: [],
		};
	}

	render() {
		const { events, eventStarts, eventEnds } = this.state;

		var user = firebase.auth().currentUser;
		let dataEvents = [];
		let dataEventsStart = [];
		let dataEventsEnd = [];
		db.collection("users")
			.doc(user.uid)
			.collection("events")
			.get()
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => doc.data());

				// Get the  data element Name
				for (var i = 0; i < data.length; i++) {
					dataEvents.push(data[i].eventName);
					dataEventsStart.push(data[i].startTime.seconds);
					dataEventsEnd.push(data[i].endTime.seconds);
				}
				this.setState({ events: dataEvents });
				this.setState({ eventStarts: dataEventsStart });
				this.setState({ eventEnds: dataEventsEnd });
			});

		const listEvents = events.map((event, idx) => {
			return (
				<tr>
					<td>{event}</td>
					<td>
						{new Date(this.state.eventStarts[idx] * 1000).toLocaleDateString()}{" "}
						{new Date(this.state.eventStarts[idx] * 1000).toLocaleTimeString()}
					</td>
					<td>
						{new Date(this.state.eventEnds[idx] * 1000).toLocaleDateString()}{" "}
						{new Date(this.state.eventEnds[idx] * 1000).toLocaleTimeString()}
					</td>{" "}
				</tr>
			);
		});
		return (
			<div>
				<h2>Events</h2>
				<table class="table table-striped">
					<thead>
						<tr>
							<th scope="col">Event</th>
							<th scope="col">Start</th>
							<th scope="col">End</th>
						</tr>
					</thead>
					<tbody>{listEvents}</tbody>
				</table>
			</div>
		);
	}
}
