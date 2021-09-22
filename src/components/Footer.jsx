import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Footer = ({ numberOfTodos, filterTodos }) => {
	// const [selectedFilter, setSelectedFilter] = useState('all');

	const handleClick = (clicked) => {
		// setSelectedFilter(e.target.className);

		// if (selectedFilter !== 'clear-completed') {
		// 	document.querySelector(`.${selectedFilter}`).style.color =
		// 		'hsl(220, 98%, 61%)';
		// }

		filterTodos(clicked);
	};

	const theme = useContext(ThemeContext);

	return (
		<div
			style={
				theme === 'light'
					? {
							backgroundColor: 'hsl(0, 0%, 98%)',
							color: 'hsl(235, 19%, 35%)',
					  }
					: {
							backgroundColor: 'hsl(235, 24%, 19%)',
							color: 'hsl(233, 11%, 84%)',
					  }
			}
			className='footer'>
			<p className='one'>{numberOfTodos} items left</p>
			<div>
				<p className='all' onClick={() => handleClick('all')}>
					All
				</p>
				<p className='active' onClick={() => handleClick('active')}>
					Active
				</p>
				<p className='completed' onClick={() => handleClick('completed')}>
					Completed
				</p>
			</div>
			<p
				className='clear-completed'
				onClick={() => handleClick('clear-completed')}>
				Clear Completed
			</p>
		</div>
	);
};

export default Footer;
