import React from "react";
import Counter from "./counter";

const Counters = (props) => {
	const { counters, onReset, onDelete, onIncrement, onDecrement } = props;
	return (
		<div>
			<h4>Counter</h4>
			{counters.map((counter) => (
				<Counter
					key={counter.id}
					onDelete={onDelete}
					onIncrement={onIncrement}
					onDecrement={onDecrement}
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
