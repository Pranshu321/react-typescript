import React, { useState } from "react";

const LoggedIn = () => {
	const [loggedin, setloggedin] = useState(false);
	const handleLogin = () => {setloggedin(true)};
	const handleLogOut = () => {setloggedin(false) };
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogOut}>LogOut</button>
			<div>User is {loggedin ? "Logged in" : "Logged Out"};</div>
		</div>
	);
};

export default LoggedIn;
