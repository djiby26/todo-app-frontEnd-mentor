/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CheckBox from './CheckBox';
import deleteCross from '../assets/icon-cross.svg';
import { Draggable } from 'react-beautiful-dnd';

const Todo = (
	{ id, text, isInActive, setActive, deleteTodo, theme },
	index
) => {
	// const checkedStyle = {
	// 	textDecoration: isInActive && "line-through",
	// 	color: isInActive && "hsl(233, 14%, 35%)",
	// };
	return (
		<Draggable key={id} draggableId={id.toString()} index={index}>
			{(provided) => (
				<div
					style={{
						backgroundColor: theme ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)',
					}}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className='todo'>
					<CheckBox id={id} setActive={setActive} />
					<p
						style={{
							textDecoration: isInActive && 'line-through',
							color: isInActive && 'hsl(233, 14%, 35%)',
						}}>
						{text}
					</p>
					<img
						alt=''
						onClick={() => deleteTodo(id)}
						className='delete'
						src={deleteCross}
					/>
				</div>
			)}
		</Draggable>
	);
};

export default Todo;
