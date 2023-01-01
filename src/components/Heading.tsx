import React from "react";
interface HeadingProps {
	children: string;
}

const Heading = (props: HeadingProps) => {
	return <div>{props.children}</div>;
};

export default Heading;
