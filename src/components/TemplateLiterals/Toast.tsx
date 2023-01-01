import React from "react";

type horizontalpos = "left" | "center" | "right";
type verticalPos = "top" | "center" | "bottom";

type ToastProps = {
	position:
		| Exclude<`${horizontalpos}-${verticalPos}`, "center-center">
		| "center";
};

const Toast = ({ position }: ToastProps) => {
	return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
