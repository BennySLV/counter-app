import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
	};
	render() {
		return (
			<React.Fragment>
				<spam className="badge badge-primary m-2">
					{this.formatCount()}
				</spam>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</React.Fragment>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
