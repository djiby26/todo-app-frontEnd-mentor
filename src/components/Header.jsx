/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import lightThemeButton from '../assets/icon-sun.svg';
import darkThemeButton from '../assets/icon-moon.svg';

const Header = ({ getTheme }) => {
	const [theme, setTheme] = useState('dark');
	const applyTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		getTheme(theme);
	};
	return (
		<div className='header'>
			<h2>TODO</h2>
			<img
				onClick={() => applyTheme()}
				src={theme === 'light' ? lightThemeButton : darkThemeButton}
			/>
		</div>
	);
};

export default Header;
