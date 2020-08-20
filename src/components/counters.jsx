import React from "react";
import Counter from "./counter";

const Counters = (props) => {
	const { counters, onReset, onDelete, onIncrement } = props;
	return (
		<div>
			<h4>Counter</h4>
			{counters.map((counter) => (
				<Counter
					key={counter.id}
					onDelete={onDelete}
					onIncrement={onIncrement}
					counter={counter}
				></Counter>
			))}
			<button onClick={onReset} className="btn btn-primary btn-sm m-2">
				Reset
			</button>
		</div>
	);
};

export default Counters;
