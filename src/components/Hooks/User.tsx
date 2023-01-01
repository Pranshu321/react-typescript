import React, { useState } from "react";
type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setuser] = useState<AuthUser>({} as AuthUser);
	const handleLogin = () => {
		setuser({
			name: "vishwas",
			email: "vishwas@gmai.com",
		});
	};

	return (
		<div>
			<button onClick={handleLogin}>click</button>
			my name is {user.name}
		</div>
	);
};

export default User;
