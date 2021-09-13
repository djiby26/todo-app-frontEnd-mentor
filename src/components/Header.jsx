/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import lightThemeButton from "../assets/icon-sun.svg";
import darkThemeButton from "../assets/icon-moon.svg";

const Header = ({ getTheme }) => {
	const [theme, setTheme] = useState(false);
	const applyTheme = () => {
		setTheme(!theme);
		getTheme(theme);
	};
	return (
		<div className="header">
			<h2>TODO</h2>
			<img
				onClick={() => applyTheme()}
				src={theme ? darkThemeButton : lightThemeButton}
			/>
		</div>
	);
};

export default Header;
