import React from "react";

type TextProps<E extends React.ElementType> = {
	size?: "sm" | "md" | "lg";
	color?: "primary" | "secondary";
	children: React.ReactNode;
	as?: E;
};

type TextElementProps<E extends React.ElementType> = TextProps<E> &
	Omit<React.ComponentProps<E>, keyof TextProps<E>>;

const Text = <E extends React.ElementType = "div">({
	size,
	color,
	children,
	as,
}: TextElementProps<E>) => {
	const Component = as || "div";
	return (
		<Component className={`class-with-${size}-${color}`}>{children}</Component>
	);
};

export default Text;
