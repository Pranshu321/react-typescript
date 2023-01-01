import React, { useReducer } from "react";

const initialState = { counter: 0 };

type CounterState = {
	counter: number;
};

type UpdateAction = {
	type: "increment" | "decrement";
	payload: number;
};

type ResetAction = {
	type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case "increment":
			return { counter: state.counter + action.payload };
		case "decrement":
			return { counter: state.counter - action.payload };
		case "reset":
			return initialState;
		default:
			return state;
	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			Count: {state.counter}
			<button onClick={() => dispatch({ type: "increment", payload: 10 })}>
				Plus
			</button>
			<button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
				Minus
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
};

export default Counter;
