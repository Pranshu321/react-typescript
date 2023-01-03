import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Button from "./components/Events/Button";
// import Input from "./components/Events/Input";
import LoggedIn from "./components/Hooks/LoggedIn";
import User from "./components/Hooks/User";
import Counter from "./components/Hooks/UseReducer/Counter";
import ThemeContextProvider from "./components/Hooks/Context/ThemeContext";
import Box from "./components/Hooks/Context/Box";
import { UserContextProvider } from "./components/Hooks/Context/UserContext";
import { Usercon } from "./components/Hooks/Context/Usercon";
import Domref from "./components/Hooks/Ref/Domref";
import { MutableRef } from "./components/Hooks/Ref/Mutable";
import Toast from "./components/TemplateLiterals/Toast";
import Text from "./components/Polymorphic/Text";
import Button from "./components/Html/Button";
import CustomComponent from "./components/Html/CustomComponent";

function App() {
	const PersonName = {
		first: "Pranshu",
		last: "Jain",
	};

	const nameList = [
		{
			first: "Bruce",
			last: "Banner",
		},
		{
			first: "Piter",
			last: "Jenner",
		},
		{
			first: "Liya",
			last: "Denio",
		},
	];
	return (
		<div className="App">
			{/* <Greet name="Pranshu" messageCount={1} loggedIn={false} />
			<Person name={PersonName} />
			<PersonList name={nameList} />
			<Status status="loading" />
			<Heading>Hello</Heading>
			<Oscar>
				<Heading>This is an Oscar</Heading>
			</Oscar>
			<Button
				handleClick={(event , id) => {
					console.log("Button Clicked" , event , id);
				}}
			/>
			<Input value="Pranshu" handleChange={(event)=>console.log(event)} /> */}
			{/* <LoggedIn /> */}
			{/* <User /> */}
			{/* <Counter /> */}
			{/* <ThemeContextProvider>
				<Box />
			</ThemeContextProvider> */}
			{/* <UserContextProvider>
				<Usercon />
			</UserContextProvider> */}
			{/* <Domref /> */}
			{/* <MutableRef /> */}
			{/* <Toast position="center" /> */}
			{/* <Text as='h1' color="secondary" size="lg">Heading</Text>
			<Text as="h3" color="secondary" size="md">Sub heading</Text>
			<Text as="label" htmlFor="eww" color="secondary" size="sm">Paragraph</Text> */}
			<Button
				onClick={() => console.log("Customized button clied")}
				variant="secondary"
				text="This is customized button"
			>
				Heelo World
			</Button>
			<CustomComponent name="Pranshu" messageCount={2} loggedIn={true} />
		</div>
	);
}

export default App;
