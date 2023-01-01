import React from "react";
interface Z {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Z) => {
	const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	};
	return (
		<div>
			<input type="text" value={props.value} onChange={handleChangeEvent} />
		</div>
	);
};

export default Input;
