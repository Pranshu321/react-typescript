import React from "react";
type GreetProps = {
    // Use ? to make it optional
	// name?: string;
    name: string,
    messageCount: number,
    loggedIn: boolean
};

const Greet = (props: GreetProps) => {
	return (
        <div>
            <h2>
                {
                 props.loggedIn?
                 `Welcome ${props.name}! You have ${props.messageCount} unread messages`: "Welcome User"
                }
            </h2>
		</div>
	);
};

export default Greet;
