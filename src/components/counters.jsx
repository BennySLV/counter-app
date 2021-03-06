import React from "react";
import Counter from "./counter";

const Counters = (props) => {
	console.log("Counters - rendered");
	const { counters, onReset, onDelete, onIncrease, onDecrease } = props;
	return (
		<div>
			<h4>Counter</h4>
			{counters.map((counter) => (
				<Counter
					key={counter.id}
					onDelete={onDelete}
					onIncrease={onIncrease}
					onDecrease={onDecrease}
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
