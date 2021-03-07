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
					console.log(data[i].eventName);
					console.log("start " + data[i].startTime.seconds);
					console.log("end " + data[i].endTime.seconds);
					dataEvents.push(data[i].eventName);
					dataEventsStart.push(data[i].startTime.seconds);
					dataEventsEnd.push(data[i].endTime.seconds);
				}
				this.setState({ events: dataEvents });
				this.setState({ eventStarts: dataEventsStart });
				this.setState({ eventEnds: dataEventsEnd });

				console.log(dataEvents.length);
			});
		const listStartTimes = eventStarts.map((event) => event);
		const listEndTimes = eventEnds.map((event) => event);

		const list = events.map((event) => (
			<tr>
				<th scope="row">{event}</th>
				<td>{eventStarts.map((event) => event)}</td>
				<td>{eventEnds.map((event) => event)}</td>
			</tr>
		));

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
					<tbody>{list}</tbody>
				</table>
			</div>
		);
	}
}
