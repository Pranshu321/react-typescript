import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextPRovideProps = {
	children: React.ReactNode;
};

export const ThemeContext = createContext(theme);
const ThemeContextProvider = ({ children }: ThemeContextPRovideProps) => {
	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
