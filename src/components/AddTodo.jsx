import React from 'react';
import AddTodoCheckBox from './AddTodoCheckBox';
import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

const AddTodo = ({ addTodo }) => {
	const [check, setCheck] = useState(false);
	const getCheckState = (checkState) => {
		setCheck(checkState);
	};

	const handleSubmit = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			addTodo(check, e.target.value);
			e.target.value = '';
		}
	};
	const theme = useContext(ThemeContext);
	let style =
		theme === 'light'
			? {
					backgroundColor: 'hsl(0, 0%, 98%)',
					color: 'hsl(235, 19%, 35%)',
			  }
			: {
					backgroundColor: 'hsl(235, 24%, 19%)',
					color: 'hsl(233, 11%, 84%)',
			  };
	return (
		<div style={style} className='add-todo'>
			<AddTodoCheckBox getCheckState={getCheckState} />
			<form>
				<input
					onKeyPress={handleSubmit}
					style={style}
					placeholder='Create a new todo...'
					type='text'
				/>
			</form>
		</div>
	);
};

export default AddTodo;
