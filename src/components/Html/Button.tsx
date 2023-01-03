import React from "react";

type ButtonProps = {
	variant: "primary" | "secondary";
	text: string;
	children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ variant, text, children, ...rest }: ButtonProps) => {
	return (
		<>
			{" "}
			<p>{text}</p>{" "}
			<button className={`class-with-${variant}`} {...rest}>
				{children}
			</button>{" "}
		</>
	);
};

export default Button;
