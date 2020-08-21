import React, { Component } from "react";

class Counter extends Component {
	// Fallback constructor - in case handleIncrement method fails in the future
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	styles = {
		fontSize: 10,
		fontWeight: "bold",
	};

	componentDidUpdate(prevProps, prevState) {
		console.log("Previous props: ", prevProps);
		console.log("Previous state: ", prevState);
	}

	render() {
		console.log("Counter - rendered");

		return (
			<div>
				<span style={this.styles} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrease(this.props.counter)}
					className="btn btn-secondary btn-sm m-2"
				>
					Increase (+ 1)
				</button>
				<button
					onClick={() => this.props.onDecrease(this.props.counter)}
					className="btn btn-secondary btn-sm m-2"
				>
					Decrease (- 1)
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? 0 : count;
	}
}

export default Counter;
